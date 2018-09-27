import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [NavbarComponent, RegisterComponent, LoginComponent],
  exports: [NavbarComponent, LoginComponent, RegisterComponent]
})
export class SharedModule { }