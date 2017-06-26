// import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { LaddaModule } from 'angular2-ladda';
import { JsGridModule } from 'ng2-jsgrid';

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
        ValidateDirective,
        JsGridModule
    ]
})
export class SharedModule { }
