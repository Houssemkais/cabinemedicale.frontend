import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './Admin/User/admin-dashboard/admin-dashboard.component';
import { CreateuserComponent } from './Admin/User/createuser/createuser.component';
import { UpdateuserComponent } from './Admin/User/updateuser/updateuser.component';

import { UsertableComponent } from './Admin/usertable/usertable.component';
import { AppointmenttableComponent } from './Admin/Appointment/appointmenttable/appointmenttable.component';

const routes: Routes = [{ path:'', component: LoginComponent },
{ path:'inscription', component: RegistrationComponent },
{ path:'reset-password', component: ForgotPasswordComponent },

{ path:'add', component: CreateuserComponent },

{ path:'update/:id', component: UpdateuserComponent },

{
  path: 'admin',
  component: AdminDashboardComponent,
  children: [
    { path: '', redirectTo: 'usertable', pathMatch: 'full' }, // Default route
    { path: 'usertable', component: UsertableComponent },
    { path: 'appointment', component: AppointmenttableComponent },
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
