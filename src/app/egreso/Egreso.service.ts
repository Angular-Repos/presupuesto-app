import { Egreso } from './Egreso.model';

export class EgresoServicio {
  egresos: Egreso[] = [
    new Egreso('Renta departamento', 975),
    new Egreso('Ropa', 700)
  ]

  eliminar(egreso: Egreso) {
    const index = this.egresos.indexOf(egreso);
    this.egresos.splice(index, 1);
  }
}
