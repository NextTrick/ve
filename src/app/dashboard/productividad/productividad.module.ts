import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';
import { AmChartsModule } from "@amcharts/amcharts3-angular";
import { ChartModule } from 'angular2-chartjs';

import { ProductividadRoutingModule } from './productividad-routing.module';
import { ProductividadComponent } from './productividad.component'

import { DetalleIndicadoresComponent } from './detalle-indicadores/detalle-indicadores.component';
import { IndicadoresComponent } from './indicadores/indicadores.component';
import { Chart1Component } from './detalle-indicadores/chart1/chart1.component';
import { Table1Component } from './detalle-indicadores/table1/table1.component';

@NgModule({
    imports: [
        CommonModule,      
        SharedModule,  
        AmChartsModule,
        ChartModule,
        ProductividadRoutingModule
    ],
    declarations: [
        DetalleIndicadoresComponent,
        IndicadoresComponent,
        ProductividadComponent,
        Chart1Component,
        Table1Component,
    ]
})
export class ProductividadModule { }
