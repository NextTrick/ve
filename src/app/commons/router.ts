import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApploginComponent } from '../components/applogin/applogin.component';
import { AppsignupComponent } from '../components/appsignup/appsignup.component';
import { ApprecoverpasswordComponent } from '../components/apprecoverpassword/apprecoverpassword.component';
import { UserlistComponent } from '../components/userlist/userlist.component';
import { ApphomeComponent } from '../components/apphome/apphome.component';
import {  UsercreateComponent } from '../components/usercreate/usercreate.component';

export const ROUTES:Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: ApploginComponent},
    {path: 'signup', component: AppsignupComponent},
    {path: 'recover-password', component: ApprecoverpasswordComponent},
    {path: 'user', component: UserlistComponent },
    {path: 'user/create', component: UsercreateComponent }
];