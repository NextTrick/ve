import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { SharedModule } from '../../shared/shared.module';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { ListComponent } from './list/list.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { UserComponent } from './user.component';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    BsDropdownModule.forRoot(),
    UserRoutingModule
  ],
  declarations: [
    ListComponent, 
    CreateComponent,
    EditComponent,
    UserComponent  
  ]
})
export class UserModule { }
