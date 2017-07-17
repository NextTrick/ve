import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';

const mainRoutes: Routes = [  
  { path: '', component:  LayoutComponent,
    children: [      
        { path: 'user', loadChildren: 'app/dashboard/user/user.module#UserModule' },
        { path: 'acl', loadChildren: 'app/dashboard/acl/acl.module#AclModule' },
        { path: '', component:  HomeComponent},
        { path: 'productividad', loadChildren: 'app/dashboard/productividad/productividad.module#ProductividadModule'},
        // { path: '', redirectTo: 'productividad', pathMatch: 'full' }
    ]
  }
];
 
@NgModule({
  imports: [
    RouterModule.forChild(mainRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class MainRoutingModule {}
