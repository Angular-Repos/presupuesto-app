import { Component, OnInit } from '@angular/core';
import { IngresoServicio } from '../ingreso/Ingreso.service';
import { EgresoServicio } from '../egreso/Egreso.service';
import { Ingreso } from '../ingreso/Ingreso.model';
import { Egreso } from '../egreso/Egreso.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {
  descripcion: string = '';
  valor: number = 0;
  isIngreso = true;

  constructor(
    private ingresoService: IngresoServicio,
    private egresoService: EgresoServicio
  ) { }

  ngOnInit(): void {
  }

  toggleColor(event) {
    this.isIngreso = event.target.value === 'ing' ? true : false;
  }

  agregarItem(tipo: HTMLSelectElement) {
    if (this.descripcion === '' || this.valor === 0) {
      alert('Debes llenar el formulario');
      return;
    }
    if (tipo.value === 'ing') {
      const ingreso = new Ingreso(this.descripcion, this.valor);
      this.ingresoService.agregar(ingreso);
    } else {
      const egreso = new Egreso(this.descripcion, this.valor);
      this.egresoService.agregar(egreso);
    }
  }

}
