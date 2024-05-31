import { Component } from '@angular/core';
import { ServiceCardComponent } from '../service-card/service-card.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [ServiceCardComponent, CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css',
})
export class ServicesComponent {
  services = [
    {
      title: 'Language Lessons for Students',
      description: 'Providing language lessons for students.',
    },
    {
      title: 'Platform for Teachers',
      description: 'Providing a platform for teachers to teach languages.',
    },
    {
      title: 'Resources to Learn German',
      description: 'Resources to learn German with.',
    },
  ];
}
