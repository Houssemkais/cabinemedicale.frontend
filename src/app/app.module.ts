import { NgModule, forwardRef, Provider } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTableModule} from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { AdminDashboardComponent } from './Admin/User/admin-dashboard/admin-dashboard.component';

import {MatToolbarModule} from '@angular/material/toolbar';


import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatNativeDateModule, MatOption, MatOptionModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';

import { MatPaginatorModule } from '@angular/material/paginator';

import {MatSelectModule} from '@angular/material/select';
import { CreateuserComponent } from './Admin/User/createuser/createuser.component';
import { UserserviceService } from './service/userservice.service';

import { UpdateuserComponent } from './Admin/User/updateuser/updateuser.component';
import { PaginatorConfigurableExampleComponent } from './paginator-configurable-example/paginator-configurable-example.component';
import { ApiModule } from '../api/api.module';
import { TokenHttpInterceptor } from './token.http.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatSortModule } from '@angular/material/sort';


import { SidebarModule } from 'ng-cdbangular';
import { NavbarComponent } from './Admin/navbar/navbar.component';
import { UsertableComponent } from './Admin/usertable/usertable.component';

import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { AppointmenttableComponent } from './Admin/Appointment/appointmenttable/appointmenttable.component';
import { CreateAppointmentComponent } from './Admin/Appointment/create-appointment/create-appointment.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { UpdateAppointmentComponent } from './Admin/Appointment/update-appointment/update-appointment.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AaaComponent } from './aaa/aaa.component';

export const API_INTERCEPTOR_PROVIDER: Provider = {
  provide: HTTP_INTERCEPTORS,
  useExisting: forwardRef(() => TokenHttpInterceptor),
  multi: true
  
};

export const MY_DATE_FORMAT = {
    parse: {
        dateInput: 'LL'
    },
    display: {
        dateInput: 'DD-MM-YYYY',
        monthYearLabel: 'YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'YYYY'
    }
};



@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        RegistrationComponent,
        ForgotPasswordComponent,
        
        AdminDashboardComponent,
        CreateuserComponent,
        UpdateuserComponent,
       UsertableComponent,
        NavbarComponent,
        AppointmenttableComponent,
        CreateAppointmentComponent,
        UpdateAppointmentComponent,
        AaaComponent,

  
    
      
    ],
    providers: [UserserviceService, API_INTERCEPTOR_PROVIDER, TokenHttpInterceptor,
        { provide: DateAdapter, useClass: MomentDateAdapter, deps: [MAT_DATE_LOCALE] },
{ provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMAT }],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        NgxMaterialTimepickerModule,
        AppRoutingModule,
        HttpClientModule,
        SidebarModule,
        FormsModule,
        MatIconModule,
        MatInputModule,
        MatFormFieldModule,
        MatButtonModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatToolbarModule,
        MatButtonModule,
        MatDialogModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatRadioModule,
        MatDatepickerModule,
        MatNativeDateModule,
        MatRadioModule,
        MatSelectModule,
        PaginatorConfigurableExampleComponent,
        MatPaginatorModule,
        MatTableModule,
        MatSortModule,
        ApiModule.forRoot({ rootUrl: 'http://localhost:8080' }),
        MatSnackBarModule,
    ]
})
export class AppModule { }
