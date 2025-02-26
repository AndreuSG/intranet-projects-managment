import { Injectable } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { JwtPayload } from '../models/interfaces/jwt-payload.interface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  accessToken: string | null = null;

  setAccessToken(token: string): void {
    this.accessToken = token;
  }

  getAccessToken(): string | null {
    return this.accessToken;
  }

  getUserRole(): string {
    if (!this.accessToken) return '';

    const payload: JwtPayload = jwtDecode(this.accessToken);
    return payload.admin ? 'admin' : payload.role;
  }

  getUsername(): string {
    if (!this.accessToken) return '';

    const payload: JwtPayload = jwtDecode(this.accessToken);
    return payload.username;
  }

  getId(): number {
    if (!this.accessToken) return 0;

    const payload: JwtPayload = jwtDecode(this.accessToken);
    return payload.id;
  }
}
