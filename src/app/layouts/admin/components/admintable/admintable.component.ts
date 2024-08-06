import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../../service/user.service';
import { User } from '../../../../model/user';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-admintable',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './admintable.component.html',
  styleUrl: './admintable.component.css',
})
export class AdmintableComponent implements OnInit {
  users: User[] = [];
  currentPage = 1;
  pageSize = 10;
  totalPages = 0;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.displayUsers();
  }

  displayUsers(): void {
    this.userService.getAllUsers(this.currentPage, this.pageSize).subscribe(
      (response) => {
        this.users = response.content;
        this.totalPages = response.totalPages;
      },
      (error) => {
        console.error('Error fetching users:', error);
      }
    );
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages - 1) {
      this.currentPage++;
      this.displayUsers();
    }
  }

  previousPage(): void {
    if (this.currentPage > 0) {
      this.currentPage--;
      this.displayUsers();
    }
  }
}
