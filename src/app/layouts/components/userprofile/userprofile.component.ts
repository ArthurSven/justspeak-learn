import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { AuthService } from '../../../service/auth.service';
import { User } from '../../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userprofile',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userprofile.component.html',
  styleUrl: './userprofile.component.css',
})
export class UserprofileComponent implements OnInit {
  user: User | null = null; // Store the fetched user data
  userId: string | null = null;
  username: string | null = null;
  firstname: string | null = null;
  lastname: string | null = null;
  email: string | null = null;
  date: string | null = null;

  constructor(
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.username = this.authService.getUsername()
    this.firstname = this.authService.getFirstname()
    this.lastname = this.authService.getLastname()
    this.email = this.authService.getEmail()
    this.date = this.authService.getDate()
  }
}
