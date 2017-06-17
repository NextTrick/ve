import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLoginComponent } from './auth-login/auth-login.component';
import { AuthSigupComponent } from './auth-sigup/auth-sigup.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [AuthLoginComponent, AuthSigupComponent]
})
export class AuthModule { }
