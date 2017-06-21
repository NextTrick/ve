import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { LayoutComponent } from './layout/layout.component';

const mainRoutes: Routes = [  
  { path: '', component:  LayoutComponent,
    children: [      
        { path: 'user', loadChildren: 'app/dashboard/user/user.module#UserModule' },
        { path: '', redirectTo: 'user', pathMatch: 'full' }
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
