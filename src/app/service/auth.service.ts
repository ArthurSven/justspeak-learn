import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

interface LoginResponse {
  success: boolean;
  message?: string;
  token?: string;
  role?: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private currentUser: string | null = null;
  private currentRole: string | null = null;
  private loginUrl = 'http://localhost:8080/user/auth/login';

  constructor(private http: HttpClient, private router: Router) {}

  login(username: string, password: string): Observable<LoginResponse> {
    return this.http
      .post<LoginResponse>(this.loginUrl, { username, password })
      .pipe(
        map((response) => {
          if (response.token && response.role && response.message) {
            this.currentUser = username;
            localStorage.setItem('message', response.message);
            localStorage.setItem('token', response.token);
            localStorage.setItem('role', response.role);
            localStorage.setItem('username', username);
          }
          return response;
        })
      );
  }

  getToken(): string | null {
    return this.currentRole || localStorage.getItem('token');
  }

  getCurrentUser(): string | null {
    return this.currentUser || localStorage.getItem('username');
  }

  getRole(): string | null {
    return localStorage.getItem('role');
  }

  isAuthenticated(): boolean {
    return this.getCurrentUser() !== null && this.getRole() !== null;
  }

  logout(): void {
    this.currentUser = null;
    this.currentRole = null;
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    this.router.navigate(['/login']);
  }
}
