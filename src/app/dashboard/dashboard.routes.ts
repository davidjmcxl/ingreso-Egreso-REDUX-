import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { EstadisticaComponent } from "../ingreso-egreso/estadistica/estadistica.component";
import { IngresoEgresoComponent } from "../ingreso-egreso/ingreso-egreso.component";
import { DetalleComponent } from "../ingreso-egreso/detalle/detalle.component";

export const dashboardRoutes:Routes=[
     {path:'',component:EstadisticaComponent},
     {path:'ingresos-egresos', component:IngresoEgresoComponent}
     ,{
      path:'detalle',component:DetalleComponent
     },

]
