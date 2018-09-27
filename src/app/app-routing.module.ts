import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { RegisterComponent } from './shared/register/register.component';
import { GadaiModule } from './gadai/gadai.module';
import { AuthGuard } from './auth-guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'gadai', redirectTo: '/gadai', canActivateChild: [AuthGuard]}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    GadaiModule],
  declarations: [],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
