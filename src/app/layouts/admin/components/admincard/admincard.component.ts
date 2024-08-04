import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-admincard',
  standalone: true,
  imports: [],
  templateUrl: './admincard.component.html',
  styleUrl: './admincard.component.css',
})
export class AdmincardComponent {
  @Input() number: number = 0;
  @Input() icon: string = '';
  @Input() label: string = '';
}
