import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './components/error/error.component';
import { LandingComponent } from './components/landing/landing.component';
import { NgModule } from '@angular/core';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: ErrorComponent },
  //No routes after this point
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}


