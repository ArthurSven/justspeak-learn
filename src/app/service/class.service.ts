import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ClassService {
  private apiUrl = 'http://localhost:8080/classroom/count-all-classes';

  constructor(private http: HttpClient) {}

  getClassCount() : Observable<number> {
    return this.http.get<number>(this.apiUrl)
  }
}
