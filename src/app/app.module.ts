import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DatePickerComponent } from './component/date-picker/date-picker.component';

//Services
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { FormService } from './common/service/form.service';
import { UtilService } from './common/service/util.service';
import { ScriptService } from './common/service/script.service';
import { GoogleChartComponent } from './common/component/google-chart/google-chart.component';
import { NextNg2TableComponent } from './common/component/next-ng2-table/next-ng2-table.component';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        DatePickerComponent,
        // GoogleChartComponent,
        // NextNg2TableComponent,               
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule,        
        AppRoutingModule,        
        BrowserAnimationsModule
    ],
    providers: [
        UserService, 
        AuthService, 
        AuthGuardService, 
        FormService,
        UtilService,
        ScriptService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
