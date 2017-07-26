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

import { Chart1Component as IndicadoresChart1Componenet} from './indicadores/chart1/chart1.component';
import { Chart2Component } from './indicadores/chart2/chart2.component';
import { Chart3Component } from './indicadores/chart3/chart3.component';
import { Chart4Component } from './indicadores/chart4/chart4.component';

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

        IndicadoresChart1Componenet,
        Chart2Component,
        Chart3Component,
        Chart4Component,
    ]
})
export class ProductividadModule { }
