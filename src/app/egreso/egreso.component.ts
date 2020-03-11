import { Component, OnInit, Input } from '@angular/core';
import { Egreso } from './Egreso.model';
import { EgresoServicio } from './Egreso.service';

@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent implements OnInit {
  egresos: Egreso[] = [];
  @Input() egresoTotal: number;

  constructor(private egresoService: EgresoServicio) { }

  ngOnInit() {
    this.egresos = this.egresoService.egresos;
  }

  eliminarEgreso(egreso: Egreso) {
    this.egresoService.eliminar(egreso);
  }

  calcularPorcentaje(egreso: Egreso) {
    return egreso.valor / this.egresoTotal;
  }

}
