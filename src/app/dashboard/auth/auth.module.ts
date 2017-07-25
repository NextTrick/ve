import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AuthComponent } from './auth.component';
import { LogoutComponent } from './logout/logout.component';

@NgModule({
    imports: [
        CommonModule,
        SharedModule,
        AuthRoutingModule
    ],
    declarations: [
        LoginComponent,
        SignupComponent,
        RecoverPasswordComponent,
        AuthComponent,
        LogoutComponent
    ],
    bootstrap: [AuthComponent]
})
export class AuthModule { }
