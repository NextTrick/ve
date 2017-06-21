import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';
import { LaddaModule } from 'angular2-ladda';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,    
    ReactiveFormsModule,
    LaddaModule
  ],
  declarations: [],
  exports: [
    FormsModule,
    HttpModule,    
    ReactiveFormsModule,
    LaddaModule
  ]
})
export class SharedModule { }
