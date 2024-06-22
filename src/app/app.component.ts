import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { TopbarComponent } from './components/topbar/topbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, TopbarComponent, FooterComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'justpeak-frontend';
  showHeaderFooter: boolean = true;

  constructor(private router: Router) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.showHeaderFooter = !event.url.startsWith('/admin-dashboard');
      }
    });
  }

  ngOnInit(): void {
     this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd)  {
        event.urlAfterRedirects.includes('/admin-dashboard') ||
        event.urlAfterRedirects.includes('/teacher-dashboard') ||
        event.urlAfterRedirects.includes('/student-dashboard')
      }
     })
  }
}
