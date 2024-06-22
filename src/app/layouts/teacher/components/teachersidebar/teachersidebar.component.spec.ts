import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersidebarComponent } from './teachersidebar.component';

describe('TeachersidebarComponent', () => {
  let component: TeachersidebarComponent;
  let fixture: ComponentFixture<TeachersidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
