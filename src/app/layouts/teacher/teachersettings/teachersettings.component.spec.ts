import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachersettingsComponent } from './teachersettings.component';

describe('TeachersettingsComponent', () => {
  let component: TeachersettingsComponent;
  let fixture: ComponentFixture<TeachersettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeachersettingsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TeachersettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
