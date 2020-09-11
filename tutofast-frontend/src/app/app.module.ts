import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { authInterceptorProviders } from './security/helpers/auth.interceptor';

import { AppComponent } from './app.component';
import { HomeComponent } from './security/pages/home/home.component';
import { LoginComponent } from './security/pages/login/login.component';
import { RegisterComponent } from './security/pages/register/register.component';
import { ProfileComponent } from './security/pages/profile/profile.component';
import { StudentMainComponent } from './dashboard/pages/student/student-main/student-main.component';
import { TeacherMainComponent } from './dashboard/pages/teacher/teacher-main/teacher-main.component';
import { AdminMainComponent } from './dashboard/pages/admin/admin-main/admin-main.component';
import { PlansAdministrationComponent } from './dashboard/pages/admin/plans-administration/plans-administration.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    StudentMainComponent,
    TeacherMainComponent,
    AdminMainComponent,
    PlansAdministrationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
