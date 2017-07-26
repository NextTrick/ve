import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

import { AuthGuardService } from '../service/auth-guard.service';
import { AclGuardService } from '../service/acl-guard.service';

const mainRoutes: Routes = [
    {
        path: 'dashboard', component: LayoutComponent, 
        canActivate: [AuthGuardService],
        children: [
            {
                path: 'user',
                loadChildren: 'app/dashboard/user/user.module#UserModule',
                canActivate: [AclGuardService]
            },
            {
                path: 'acl',
                loadChildren: 'app/dashboard/acl/acl.module#AclModule',
                canActivate: [AclGuardService]
            },
            {
                path: 'productividad',
                loadChildren: 'app/dashboard/productividad/productividad.module#ProductividadModule',
                canActivate: [AclGuardService]
            },
            { path: '', redirectTo: 'productividad', pathMatch: 'full' }, 
        ]
    },    
    { 
        path: 'dashboard/auth', 
        loadChildren: 'app/dashboard/auth/auth.module#AuthModule' 
    },    
];

@NgModule({
    imports: [
        RouterModule.forChild(mainRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class MainRoutingModule { }
