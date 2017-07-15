// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LaddaModule } from 'angular2-ladda';
import { JsGridModule } from 'ng2-jsgrid';

import { Ng2TableModule } from '../common/module/next-ng2-table/ng-table-module';
import { PaginationModule } from 'ngx-bootstrap';

import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';

//Directives
import {ValidateDirective} from '../common/directive/validate.directive';

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
        JsGridModule,
        FileSelectDirective,
        FileDropDirective,
        Ng2TableModule,
        PaginationModule
    ]
})
export class SharedModule { }
