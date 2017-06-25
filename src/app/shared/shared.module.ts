// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LaddaModule } from 'angular2-ladda';

//Directives
import {ValidateDirective} from '../common/directive/validate.directive';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        LaddaModule        
    ],
    declarations: [        
        ValidateDirective
    ],
    exports: [
        FormsModule,
        HttpModule,
        ReactiveFormsModule,
        LaddaModule,
        RouterModule,
        ValidateDirective
    ]
})
export class SharedModule { }
