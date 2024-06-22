import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeacherclassmanagementComponent } from './teacherclassmanagement.component';

describe('TeacherclassmanagementComponent', () => {
  let component: TeacherclassmanagementComponent;
  let fixture: ComponentFixture<TeacherclassmanagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeacherclassmanagementComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeacherclassmanagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
