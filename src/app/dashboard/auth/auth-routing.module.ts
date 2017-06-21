import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RecoverPasswordComponent } from './recover-password/recover-password.component';
import { AuthComponent } from './auth.component';
 
const authRoutes: Routes = [    
    { path: '', component: AuthComponent,
      children: [      
        { path: 'login', component: LoginComponent },
        { path: 'signup', component: SignupComponent },
        { path: 'recover-password', component: RecoverPasswordComponent },
        { path: '', component: LoginComponent }
      ]
    },
];
 
@NgModule({
  imports: [
    RouterModule.forChild(authRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AuthRoutingModule {}
