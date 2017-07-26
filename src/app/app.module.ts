import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';
import { MainModule } from './dashboard/main/main.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AccessDeniedComponent } from './component/access-denied/access-denied.component';

// //Services
import { UtilService } from './common/service/util.service';
import { FormService } from './common/service/form.service';
import { ScriptService } from './common/service/script.service';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent,
        AccessDeniedComponent,        
    ],
    imports: [
        BrowserModule,
        HttpModule,
        CoreModule, 
        MainModule,       
        BrowserAnimationsModule,
        AppRoutingModule,                
    ],
    providers: [
        UtilService,
        FormService,        
        ScriptService,        
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
