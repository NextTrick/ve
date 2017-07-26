import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaddaModule } from 'angular2-ladda';

import { MainRoutingModule } from './main-routing.module';

//components
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';
import { HomeComponent } from './home/home.component';
import { Chart1Component } from './home/chart1/chart1.component';
import { Chart2Component } from './home/chart2/chart2.component';
import { Chart3Component } from './home/chart3/chart3.component';
import { Chart4Component } from './home/chart4/chart4.component';

//Services
import { LayoutService } from '../service/layout.service';
import { UserService } from '../service/user.service';
import { RolService } from '../service/rol.service';
import { ResourceService } from '../service/resource.service';
import { AclService } from '../service/acl.service';
import { AclGuardService } from '../service/acl-guard.service';
import { AuthService } from '../service/auth.service';
import { AuthGuardService } from '../service/auth-guard.service';

//Directives
import { AclDirective } from '../../common/directive/acl.directive';

@NgModule({
    imports: [
        CommonModule,
        LaddaModule,          
        MainRoutingModule
    ],
    declarations: [        
        FooterComponent,
        NavComponent,
        MenuComponent,
        LayoutComponent,
        HomeComponent,
        Chart1Component,
        Chart2Component,
        Chart3Component,
        Chart4Component,   
        AclDirective,
    ],
    exports: [        
    ],
    providers: [
        LayoutService,
        UserService, 
        RolService,
        ResourceService,        
        AclService,         
        AclGuardService,     
        AuthService, 
        AuthGuardService,            
    ]
})
export class MainModule { }
