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
      description: 'We enable students to find a suitable teacher and a classroom, students can choose which language and which level to learn based on their preference.',
    },
    {
      title: 'Platform for Teachers',
      description: 'We enable language teachers to set up language classes and offer language lessons to students on any level. Teachers can set a fee and number of students to take in.',
    },
    {
      title: 'Resources to Learn languages',
      description: 'We provide enthusiastic language learners free resources to practice and improve their language skills. Currently we provide resources for German.',
    },
  ];
}
