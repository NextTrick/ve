import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './component/not-found/not-found.component';
import { AccessDeniedComponent } from './component/access-denied/access-denied.component';

import { AuthGuardService } from './dashboard/service/auth-guard.service';

const appRoutes: Routes = [
    // {
    //     path: 'dashboard',
    //     loadChildren: 'app/dashboard/main/main.module#MainModule',
    //     // canActivate: [AuthGuardService]
    // },
    // { path: 'dashboard/auth', loadChildren: 'app/dashboard/auth/auth.module#AuthModule' },
    
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'access-denied', component: AccessDeniedComponent },
    { path: '**', component: NotFoundComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
