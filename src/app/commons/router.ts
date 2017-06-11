import { Routes } from '@angular/router';
import { AppComponent } from '../app.component';
import { ApploginComponent } from '../components/applogin/applogin.component';
import { AppsignupComponent } from '../components/appsignup/appsignup.component';

export const ROUTES:Routes = [
    {path: '', component: AppComponent},
    {path: 'login', component: ApploginComponent},
    {path: 'signup', component: AppsignupComponent}
];