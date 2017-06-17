import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { AppheaderComponent } from './components/appheader/appheader.component';
import { AppfooterComponent } from './components/appfooter/appfooter.component';
import { AppmenuComponent } from './components/appmenu/appmenu.component';
import { AppnavbarComponent } from './components/appnavbar/appnavbar.component';
import { AppcontentComponent } from './components/appcontent/appcontent.component';
import { ApploginComponent } from './components/applogin/applogin.component';
import { AppsignupComponent } from './components/appsignup/appsignup.component';
import { ApphomeComponent } from './components/apphome/apphome.component';

import {InitComponent} from './init.component';

//Routes
import {ROUTES} from './commons/router';

//Modules
import {RouterModule} from '@angular/router';

//Services
import { UserService } from './services/user.service';
import { ApprecoverpasswordComponent } from './components/apprecoverpassword/apprecoverpassword.component';
import { UsercreateComponent } from './components/usercreate/usercreate.component';
import { UserlistComponent } from './components/userlist/userlist.component';

//Ladda
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  declarations: [
    AppComponent,
    AppheaderComponent,
    AppfooterComponent,
    AppmenuComponent,
    AppnavbarComponent,
    AppcontentComponent,
    ApploginComponent,
    InitComponent,
    AppsignupComponent,
    ApphomeComponent,
    ApprecoverpasswordComponent,
    UsercreateComponent,
    UserlistComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BsDropdownModule.forRoot(),
    RouterModule.forRoot(ROUTES),
    ReactiveFormsModule,
    LaddaModule
  ],
  providers: [UserService],
  bootstrap: [InitComponent]
})
export class AppModule { }
