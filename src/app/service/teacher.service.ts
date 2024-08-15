import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Location } from '@angular/common'; // Import Location
import { map } from 'rxjs/operators';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class TeacherService {
  constructor(
    private http: HttpClient,
    private router: Router,
    private location: Location,
    private cookieService: CookieService,
    private authService: AuthService
  ) {}

  

}
