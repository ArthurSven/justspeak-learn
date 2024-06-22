import { Component } from '@angular/core';
import { TeachersidebarComponent } from '../components/teachersidebar/teachersidebar.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-teacherdashboard',
  standalone: true,
  imports: [TeachersidebarComponent, RouterModule],
  templateUrl: './teacherdashboard.component.html',
  styleUrl: './teacherdashboard.component.css'
})
export class TeacherdashboardComponent {

}
