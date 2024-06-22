import { HttpClient, HttpHeaders } from '@angular/common/http';
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user/auth/register';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    console.log()
    return this.http.post<any>(this.apiUrl, user);
  }
}
