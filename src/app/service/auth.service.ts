import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'; // Import Location
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  role?: string;
  firstname?: string;
  lastname?: string;
  username?: string;
  email?: string;
  date?: string;
  profile?: Blob;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: string | null = null;
  private currentRole: string | null = null;
  private loginUrl = 'http://localhost:8080/user/auth/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private cookieService: CookieService
  ) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.loginUrl, { username, password })
      .pipe(
        map((response) => {
          if (response.token && response.role && response.message) {
            this.currentUser = username;
            this.cookieService.set('message', response.message);
            this.cookieService.set('token', response.token);
            this.cookieService.set('role', response.role);
            this.cookieService.set('username', username);
            this.cookieService.set(
              'profile',
              response.profile ? response.profile.toString() : ''
            );
            this.cookieService.set('email', response.email ?? '');
            this.cookieService.set('date', response.date ?? '');
            this.cookieService.set('firstname', response.firstname ?? '');
            this.cookieService.set('lastname', response.lastname ?? '');
          }
          return response;
        })
      );
  }

  getToken(): string | null {
    return this.currentRole || this.cookieService.get('token'); //.getItem('token');
  }

  getUsername(): string | null {
    return this.cookieService.get('username');
  }

  getFirstname(): string | null {
    return this.cookieService.get('firstname');
  }

  getLastname(): string | null {
    return this.cookieService.get('lastname');
  }

  getEmail(): string | null {
    return this.cookieService.get('email');
  }

  getDate(): string | null {
    return this.cookieService.get('date');
  }

  getCurrentUser(): string | null {
    return this.currentUser || this.cookieService.get('username');
  }

  getRole(): string | null {
    return this.cookieService.get('role');
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null && this.getRole() !== null;
  }

  logout(): void {
    this.currentUser = null;
    this.currentRole = null;
    this.cookieService.delete('token');
    this.cookieService.delete('role');
    this.cookieService.delete('username');
    this.cookieService.delete('firstname');
    this.cookieService.delete('lastname');
    this.cookieService.delete('email');
    this.location.replaceState('/');
    this.router.navigate(['/login']);
  }
}
