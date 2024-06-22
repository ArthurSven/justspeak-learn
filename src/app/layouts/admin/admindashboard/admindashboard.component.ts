import { Component } from '@angular/core';
import { AdminsidebarComponent } from '../components/adminsidebar/adminsidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admindashboard',
  standalone: true,
  imports: [AdminsidebarComponent, RouterModule],
  templateUrl: './admindashboard.component.html',
  styleUrl: './admindashboard.component.css'
})
export class AdmindashboardComponent {

}
