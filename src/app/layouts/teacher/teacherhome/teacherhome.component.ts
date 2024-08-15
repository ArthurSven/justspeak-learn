import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../service/user.service';
import { CommonModule } from '@angular/common';
import { UserprofileComponent } from '../../components/userprofile/userprofile.component';

@Component({
  selector: 'app-teacherhome',
  standalone: true,
  imports: [CommonModule, UserprofileComponent],
  templateUrl: './teacherhome.component.html',
  styleUrl: './teacherhome.component.css'
})
export class TeacherhomeComponent implements OnInit {

  constructor(userService : UserService) {

  }

  ngOnInit(): void {

  }
}
