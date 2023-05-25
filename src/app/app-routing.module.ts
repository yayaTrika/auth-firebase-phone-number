import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./auth/login/login.component";
import {DashboardComponent} from "./component/dashboard/dashboard.component";
import {OtpComponent} from "./component/otp/otp.component";

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'otps', component: OtpComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
