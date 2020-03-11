import { Component } from '@angular/core';
import { Ingreso } from './ingreso/Ingreso.model';
import { Egreso } from './egreso/Egreso.model';
import { IngresoServicio } from './ingreso/Ingreso.service';
import { EgresoServicio } from './egreso/Egreso.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'presupuesto-app';
  ingresos: Ingreso[] = [];
  egresos: Egreso[] = [];

  constructor(
    private ingresoService: IngresoServicio,
    private egresoService: EgresoServicio
  ) {
    this.ingresos = this.ingresoService.ingresos;
    this.egresos = this.egresoService.egresos;
  }

  getIngresoTotal() {
    let ingresoTotal = 0;
    this.ingresos.forEach(item => ingresoTotal += item.valor);
    return ingresoTotal;
  }

  getEgresoTotal() {
    let egresoTotal = 0;
    this.egresos.forEach(item => egresoTotal += item.valor);
    return egresoTotal;
  }

  getPorcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
