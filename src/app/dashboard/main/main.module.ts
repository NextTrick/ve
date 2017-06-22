import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LaddaModule } from 'angular2-ladda';
import { MainRoutingModule } from './main-routing.module';

import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';
import { LayoutComponent } from './layout/layout.component';

//Services
import { LayoutService } from '../service/layout.service';

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
    ],
    exports: [
        // FooterComponent, 
        // NavComponent,
        // MenuComponent,    
        // LayoutComponent
    ],
    providers: [LayoutService]
})
export class MainModule { }
