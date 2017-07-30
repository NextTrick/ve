// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LaddaModule } from 'angular2-ladda';

import { Ng2TableModule } from '../common/module/next-ng2-table/ng-table-module';

import { PaginationModule } from 'ngx-bootstrap';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

//Directives
import { ValidateDirective } from '../common/directive/validate.directive';
import { AclDirective } from '../common/directive/acl.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        LaddaModule,
        Ng2TableModule,
        PaginationModule.forRoot(), 
    ],
    declarations: [        
        ValidateDirective,
        // AclDirective,
        FileSelectDirective,
        FileDropDirective,
    ],
    exports: [
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        LaddaModule,
        RouterModule,
        ValidateDirective,        
        FileSelectDirective,
        FileDropDirective,
        Ng2TableModule,
        PaginationModule
    ]
})
export class SharedModule { }
