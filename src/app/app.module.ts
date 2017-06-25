import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/not-found/not-found.component';

//Services
import { UserService } from './service/user.service';
import { AuthService } from './service/auth.service';
import { AuthGuardService } from './service/auth-guard.service';
import { FormService } from './common/service/form.service';
import { UtilService } from './common/service/util.service';

@NgModule({
    declarations: [
        AppComponent,
        NotFoundComponent
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
        UtilService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
