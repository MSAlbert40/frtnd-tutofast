import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {HomeComponent} from './security/pages/home/home.component';
import {LoginComponent} from './security/pages/login/login.component';
import {RegisterComponent} from './security/pages/register/register.component';
import {ProfileComponent} from './security/pages/profile/profile.component';
import {TeacherMainComponent} from './dashboard/pages/teacher/teacher-main/teacher-main.component';
import {StudentMainComponent} from './dashboard/pages/student/student-main/student-main.component';
import {AdminMainComponent} from './dashboard/pages/admin/admin-main/admin-main.component';
import {PlansAdministrationComponent} from './dashboard/pages/admin/plans-administration/plans-administration.component';

const routes: Routes = [
  {path: 'Home', component: HomeComponent},
  {path: 'Login', component: LoginComponent},
  {path: 'Register', component: RegisterComponent},
  {path: 'Profile', component: ProfileComponent},
  {path: 'Dashboard-Teacher', component: TeacherMainComponent},
  {path: 'Dashboard-Student', component: StudentMainComponent},
  {path: 'Dashboard-Admin', component: AdminMainComponent},
  {path: 'plans', component: PlansAdministrationComponent},
  {path: '', redirectTo: 'Home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
