import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
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

  private userApiUrl = 'http://localhost:8080/justspeak/user/';

  constructor(private http: HttpClient) {}

  createUser(user: User): Observable<any> {
    console.log();
    return this.http.post<any>(this.apiUrl, user);
  }

  getTeacherCount(): Observable<number> {
    return this.http.get<number>(`${this.userApiUrl}count-all-teachers`);
  }

  getStudentCount(): Observable<number> {
    return this.http.get<number>(`${this.userApiUrl}count-all-students`);
  }

  getAllUsers(page: number, size: number): Observable<any> {
    const params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());
    return this.http.get<any>(`${this.userApiUrl}get-all-users`, { params });
  }
}
