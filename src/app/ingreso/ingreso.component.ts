import { Component, OnInit } from '@angular/core';
import { Ingreso } from './Ingreso.model';
import { IngresoServicio } from './Ingreso.service';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})
export class IngresoComponent implements OnInit {
  ingresos: Ingreso[] = [];

  constructor(private ingresoService: IngresoServicio) { }

  ngOnInit() {
    this.ingresos = this.ingresoService.ingresos;
  }

  eliminarIngreso(ingreso: Ingreso) {
    this.ingresoService.eliminar(ingreso);
  }
}
