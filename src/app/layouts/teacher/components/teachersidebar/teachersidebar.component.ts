import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../../service/auth.service';

@Component({
  selector: 'app-teachersidebar',
  standalone: true,
  imports: [],
  templateUrl: './teachersidebar.component.html',
  styleUrl: './teachersidebar.component.css',
})
export class TeachersidebarComponent implements OnInit {
  username: string | null = '';

  constructor(private authService: AuthService) {

  }

  ngOnInit(): void {
    this.username = this.authService.getCurrentUser()
  }
}
