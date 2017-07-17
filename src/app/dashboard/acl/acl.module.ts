import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AclRoutingModule } from './acl-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { ListComponent } from './acl/list/list.component';
import { CreateComponent } from './acl/create/create.component';
import { EditComponent } from './acl/edit/edit.component';
import { ListComponent as RolListComponent } from './rol/list/list.component';
import { CreateComponent as RolCreateComponent } from './rol/create/create.component';
import { EditComponent as RolEditComponent } from './rol/edit/edit.component';
import { ListComponent as ResourceListComponent } from './resource/list/list.component';
import { CreateComponent as ResourceCreateComponent } from './resource/create/create.component';
import { EditComponent as ResourceEditComponent } from './resource/edit/edit.component';

import { AclComponent } from './acl.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    AclRoutingModule  
  ],
  declarations: [   
      AclComponent,   
      RolListComponent,
      RolCreateComponent,
      RolEditComponent,
      ResourceListComponent,
      ResourceCreateComponent,
      ResourceEditComponent,
      ListComponent,
      CreateComponent,
      EditComponent,
    ]
})
export class AclModule { }
