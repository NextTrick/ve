import { NgModule }              from '@angular/core';
import { RouterModule, Routes }  from '@angular/router';

import { IndicadoresComponent } from './indicadores/indicadores.component';
import { DetalleIndicadoresComponent } from './detalle-indicadores/detalle-indicadores.component';
import { ProductividadComponent } from './productividad.component';

 
const productividadRoutes: Routes = [
  { path: '', component: ProductividadComponent,
    children: [          
      { path: 'detalle-indicadores', component: DetalleIndicadoresComponent },      
      { path: 'indicadores', component: IndicadoresComponent },      
      { path: '', component: IndicadoresComponent },      
    ]
  },
];
 
@NgModule({
  imports: [
    RouterModule.forChild(productividadRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductividadRoutingModule {}
