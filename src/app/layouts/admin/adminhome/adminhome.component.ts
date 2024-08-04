import { Component, OnInit } from '@angular/core';
import { AdmincardComponent } from '../components/admincard/admincard.component';
import { CommonModule } from '@angular/common';
import { ClassService } from '../../../service/class.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-adminhome',
  standalone: true,
  imports: [AdmincardComponent, CommonModule],
  templateUrl: './adminhome.component.html',
  styleUrl: './adminhome.component.css',
})
export class AdminhomeComponent implements OnInit {
  cards = [
    {
      number: 0,
      icon: 'fa fa-chalkboard-teacher',
      label: 'Number of Classes',
    },
    {
      number: 5,
      icon: 'fa fa-user-graduate',
      label: 'Number of Students',
    },
    {
      number: 2,
      icon: 'fa fa-chalkboard-teacher',
      label: 'Number of Teachers',
    },
  ];

  constructor(private classService: ClassService, private userService: UserService) {}

  ngOnInit(): void {
    this.classService.getClassCount().subscribe(count => {
      this.cards[0].number = count;
       console.log('Class count received:', count);
    })

    this.userService.getStudentCount().subscribe(count =>{
      this.cards[1].number = count;
      console.log('Student count received:', count);
    })

     this.userService.getTeacherCount().subscribe((count) => {
       this.cards[2].number = count;
       console.log('Teacher count received:', count);
     });
  }
}
