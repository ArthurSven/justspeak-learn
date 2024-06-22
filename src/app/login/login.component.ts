import { Component, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup = this.fb.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  ngOnInit() {}

  onLogin(): void {
    if (this.loginForm.valid) {
      const {username, password } = this.loginForm.value;
      this.authService.login(username, password).subscribe({
        next: (response) => {

          console.log('Login response:', response.role); // Log the entire response
          if (response.token) {
            const role = this.authService.getRole();
            if (role === 'Admin') {
              this.router.navigate(['/admin-dashboard']);
            } else if (role === 'Teacher') {
              this.router.navigate(['/teacher-dashboard']);
            } else if (role === 'Student') {
              this.router.navigate(['/student-dashboard']);
            } else {
              console.error('Invalid role:', role);
            }
          } else {
            // Handle login failure
            console.error('Login failed:', response);
          }
        },
        error: (err) => {
          console.error('Login error:', err);
        }
      })
    }
  }
}
