import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  num: number = 1;
  constructor() { }
  confirmarGuardar(mensaje: string) {
    alert(mensaje + this.num);
  }
}
