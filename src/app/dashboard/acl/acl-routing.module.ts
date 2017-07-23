import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { AclComponent } from './acl.component';

import { ListComponent } from './acl/list/list.component';
import { CreateComponent } from './acl/create/create.component';
import { EditComponent } from './acl/edit/edit.component';
import { ListComponent as RolListComponent } from './rol/list/list.component';
import { CreateComponent as RolCreateComponent } from './rol/create/create.component';
import { EditComponent as RolEditComponent } from './rol/edit/edit.component';
import { ListComponent as ResourceListComponent } from './resource/list/list.component';
import { CreateComponent as ResourceCreateComponent } from './resource/create/create.component';
import { EditComponent as ResourceEditComponent } from './resource/edit/edit.component';
 
const aclRoutes: Routes = [
  { path: '', component: AclComponent,
    children: [      
      { path: 'rol/create', component: RolCreateComponent },
      { path: 'rol/:id', component: RolEditComponent },
      { path: 'rol', component: RolListComponent },
      { path: 'resource/create', component: ResourceCreateComponent },
      { path: 'resource/:id', component: ResourceEditComponent },
      { path: 'resource', component: ResourceListComponent },
    //   { path: 'create', component: CreateComponent },
    //   { path: ':id', component: EditComponent },
      { path: '', component: ListComponent },      
    ]
  },
];
 
@NgModule({
  imports: [
    RouterModule.forChild(aclRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class AclRoutingModule {}
