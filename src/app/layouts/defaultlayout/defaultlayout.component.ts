import { Component } from '@angular/core';
import { TopbarComponent } from '../../components/topbar/topbar.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-defaultlayout',
  standalone: true,
  imports: [TopbarComponent, FooterComponent, CommonModule, RouterModule],
  templateUrl: './defaultlayout.component.html',
  styleUrl: './defaultlayout.component.css'
})
export class DefaultlayoutComponent {

}
