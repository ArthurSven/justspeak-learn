import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, ElementRef, Renderer2, NgModule } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { User } from '../model/user';
import { Observable } from 'rxjs';
import { UserService } from '../service/user.service';
import { CommonModule } from '@angular/common';
import { ToastComponent } from '../components/toast/toast.component';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    ToastComponent,
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent implements OnInit {
  showToast = false;
  toastMessage = '';
  toastType: 'success' | 'error' = 'success';

  registrationForm: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    confirmpassword: ['', [Validators.required, Validators.minLength(6)]],
    role: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.registrationForm.valid) {
      const user: User = {
        firstname: this.registrationForm.value.firstName,
        lastname: this.registrationForm.value.lastName,
        username: this.registrationForm.value.username,
        email: this.registrationForm.value.email,
        password: this.registrationForm.value.password,
        role: this.registrationForm.value.role,
      };

      this.showToast = true;

      this.userService.createUser(user).subscribe(
        (response) => {
          console.log('User registered successfully:', response);
          this.showToastMessage(response.message, 'success');
          this.registrationForm.reset(); // Clear form data after successful registration
        },
        (error) => {
          console.error('Error registering user:', error);
          this.showToastMessage(
            'Error registering user. Please try again.',
            'error'
          );
        }
      );
    }
    // Perform registration logic here
  }

  public showToastMessage(message: string, type: 'success' | 'error'): void {
    this.toastMessage = message;
    this.toastType = type;
    this.showToast = true;
    setTimeout(() => (this.showToast = false), 8000);
  }
}
