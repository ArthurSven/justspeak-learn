import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { DefaultlayoutComponent } from './layouts/defaultlayout/defaultlayout.component';
import { AdmindashboardComponent } from './layouts/admin/admindashboard/admindashboard.component';
import { AdminhomeComponent } from './layouts/admin/adminhome/adminhome.component';
import { AdminusermanagementComponent } from './layouts/admin/adminusermanagement/adminusermanagement.component';
import { QueriesComponent } from './layouts/admin/queries/queries.component';
import { TeacherdashboardComponent } from './layouts/teacher/teacherdashboard/teacherdashboard.component';
import { TeacherhomeComponent } from './layouts/teacher/teacherhome/teacherhome.component';
import { TeachersettingsComponent } from './layouts/teacher/teachersettings/teachersettings.component';
import { TeacherclassmanagementComponent } from './layouts/teacher/teacherclassmanagement/teacherclassmanagement.component';
import { StudentdashboardComponent } from './layouts/student/studentdashboard/studentdashboard.component';
import { StudentsettingsComponent } from './layouts/student/studentsettings/studentsettings.component';
import { AuthguardService } from './service/authguard.service';

export const routes: Routes = [
  {
    path: '',
    component: DefaultlayoutComponent,
    children: [
      { path: '', component: LandingComponent },
      { path: 'about', component: AboutComponent },
      { path: 'services', component: ServicesComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'login', component: LoginComponent },
    ],
  },
  {
    path: 'admin-dashboard',
    component: AdmindashboardComponent,
    canActivate: [AuthguardService],
    data: { expectedRole: 'Admin' },
    children: [
      { path: 'adminhome', component: AdminhomeComponent },
      { path: 'adminusermanagement', component: AdminusermanagementComponent },
      { path: 'queries', component: QueriesComponent },
    ],
  },
  {
    path: 'teacher-dashboard',
    component: TeacherdashboardComponent,
    canActivate: [AuthguardService],
    data: { expectedRole: 'Teacher' },
    children: [
      { path: 'teacherhome', component: TeacherhomeComponent },
      { path: 'teachersettings', component: TeachersettingsComponent },
      {
        path: 'teacherclassmanagement',
        component: TeacherclassmanagementComponent,
      },
    ],
  },
  {
    
    path: 'student-dashboard',
    component: StudentdashboardComponent,
    canActivate: [AuthguardService],
    data: { expectedRole: 'Student' },
    children: [
      { path: 'studenthome', component: StudentdashboardComponent },
      { path: 'studentsettings', component: StudentsettingsComponent },
    ],
  },
  { path: '**', component: ErrorComponent },
  //No routes after this point
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


