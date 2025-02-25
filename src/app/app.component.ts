import { Component, NgZone } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { ThemeSelectorComponent } from "./shared/components/theme-selector/theme-selector.component";
import { OAuthService } from 'angular-oauth2-oidc';
import { JwksValidationHandler } from 'angular-oauth2-oidc-jwks';
import { ApiService } from './api/api.service';
import { API_URLS } from './shared/api-routes.const';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from './models/interfaces/jwt-payload.interface';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ThemeSelectorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Gestió de projectes';

  private intranetMessageListener = (event: MessageEvent) => {
    if (event.origin !== 'https://sapalomera.cat/intranet') {
      console.error('Origen no permitido:', event.origin);
      return;
    }

    const data = event.data;
    if (data && data.token) {
      localStorage.setItem('localAuthToken', data.token);
      console.log('JWT recibido de la intranet:', data.token);
      window.removeEventListener('message', this.intranetMessageListener);
    }
  };

  constructor(
    private oauthService: OAuthService,
    private apiService: ApiService,
    private ngZone: NgZone,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.oauthService.configure({
      issuer: 'https://accounts.google.com',
      redirectUri: window.location.origin,
      clientId: '1054153902815-tirkkge4kalc070ilfl8mllp9307tl1h.apps.googleusercontent.com',
      scope: 'openid profile email',
      responseType: 'id_token token',
      strictDiscoveryDocumentValidation: false,
    });
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    this.oauthService.loadDiscoveryDocumentAndTryLogin().then(() => {
      window.addEventListener('message', this.intranetMessageListener);

      const localToken = localStorage.getItem('localAuthToken');

      if (!this.oauthService.hasValidAccessToken() && !localToken) {
        this.oauthService.initImplicitFlow();
      }

      if (this.oauthService.hasValidIdToken() && !localToken) {
        const googleToken = this.oauthService.getIdToken();

        this.apiService.post(API_URLS.GOOGLE, { token: googleToken })
          .subscribe({
            next: (response) => {
              localStorage.setItem('localAuthToken', response.access_token);
              const payload = jwtDecode(response.access_token) as JwtPayload;

              this.ngZone.run(() => {
                switch (payload.role) {
                  case 'profe':
                    this.router.navigate(['/teacher']);
                    break;
                  case 'alumne':
                    this.router.navigate(['/student']);
                    break;
                  default:
                    this.router.navigate(['/']);
                    this.oauthService.logOut();
                    break;
                }
              });
            },
            error: (err) => {
              console.error('Error autenticando con Google en el backend', err);
            }
          });
      }
    });
  }
}
