import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

import { AppComponent } from './app.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { AccessDeniedComponent } from './component/access-denied/access-denied.component';

//Services
import { UserService } from './service/user.service';
import { RolService } from './service/rol.service';
import { ResourceService } from './service/resource.service';
import { AuthService } from './service/auth.service';
import { AclService } from './service/acl.service';
import { AuthGuardService } from './service/auth-guard.service';
import { AclGuardService } from './service/acl-guard.service';
import { FormService } from './common/service/form.service';
import { UtilService } from './common/service/util.service';
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
        BrowserAnimationsModule,
        AppRoutingModule,                
    ],
    providers: [
        UserService, 
        RolService,
        ResourceService,
        AuthService, 
        AclService,
        AuthGuardService, 
        AclGuardService,
        FormService,
        UtilService,
        ScriptService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
