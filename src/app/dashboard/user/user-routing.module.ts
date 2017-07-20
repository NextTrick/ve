import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user.component';

import { AuthGuardService } from '../../service/auth-guard.service';
 
const userRoutes: Routes = [
  { path: '', component: UserComponent,
    children: [      
      { path: 'create', component: CreateComponent },
      { path: ':id', component: EditComponent },
      { path: '', component: ListComponent }
    ]
  },
];
 
@NgModule({
  imports: [
    RouterModule.forChild(userRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class UserRoutingModule {}
