import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthguardService {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const username = this.authService.getCurrentUser();

    // Cast next.data to any and access expectedRole
    const expectedRole = (next.data as any)['expectedRole'] as string;
    const currentRole = this.authService.getRole();

    if (expectedRole !== currentRole) {
      this.router.navigate(['/login']);
      return false;
    }

    // Allow access if authenticated and roles match
    return true;
  }
}
