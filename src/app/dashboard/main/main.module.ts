import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { NavComponent } from './nav/nav.component';
import { MenuComponent } from './menu/menu.component';

import { MainRoutingModule } from './main-routing.module';
import { LayoutComponent } from './layout/layout.component';

@NgModule({
  imports: [
    CommonModule,
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
  ]  
})
export class MainModule { }
