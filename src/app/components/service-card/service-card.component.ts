import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.css',
})
export class ServiceCardComponent implements OnInit {
  @Input() service: { title: string; description: string } = {
    title: '',
    description: '',
  };

  ngOnInit() {
     if (!this.service) {
       this.service = { title: '', description: '' };
     }
  }
}
