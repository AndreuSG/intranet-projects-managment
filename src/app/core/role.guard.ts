// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { Location } from '@angular/common';
import { jwtDecode } from 'jwt-decode';

@Injectable({
   providedIn: 'root'
})
export class RoleGuard implements CanActivate {
   constructor(
      private router: Router,
      private location: Location
   ) { }

   canActivate(route: ActivatedRouteSnapshot): boolean {
      const token = localStorage.getItem('localAuthToken');
      if (!token) {
         // No hay token: se regresa a la página anterior.
         this.location.back();
         return false;
      }

      let payload: any;
      try {
         payload = jwtDecode(token);
      } catch (error) {
         console.error('Error al decodificar el token', error);
         this.location.back();
         return false;
      }

      // Se espera que en la data de la ruta se defina data.roles, un array con los roles permitidos.
      const allowedRoles: string[] = route.data['roles'];
      if (!allowedRoles || allowedRoles.length === 0) {
         // Si no se especifican roles, se permite el acceso.
         return true;
      }

      // Si se requiere "admin", la ruta lo define en data.roles:
      if (allowedRoles.includes('admin')) {
         // El usuario debe ser profesor y tener la propiedad admin = 1.
         if (payload.role === 'profe' && payload.admin === 1) {
            return true;
         } else {
            this.location.back();
            return false;
         }
      }

      // Para otras rutas, se permite el acceso si el rol del usuario está entre los permitidos.
      if (allowedRoles.includes(payload.role)) {
         return true;
      }

      // Si no se cumple ninguna de las condiciones, se regresa a la página anterior.
      this.location.back();
      return false;
   }
}
