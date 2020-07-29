import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListadoService {
  private items = new Array<{ nombre: string }>();
  private listaDieta = ["Pinto con huevo", "Tortilla con Queso", "1T Frutas", "12 Almendras", "Porcion Carne con Ensalada", "Porcion Carne con Picadillo", "1T Pasta", "Sopa", "1 Paquete de Galleta con Queso", "1 Manzana", "Ceviche", "Vegetales"];

  private itemsSubject = new Subject<Array<{ nombre: string }>>();
  public itemsObservable$ = this.itemsSubject.asObservable();

  constructor() { }

  crearElemento() {
    //this.items.push({ nombre: 'Ejemplo ' + this.items.length });
    //this.itemsSubject.next(this.items);
    if (this.items.length > 13) {
      this.itemsSubject.error("Se superó el tamaño máximo de platillos");
      //this.itemsSubject.complete()
    }
    else {
      this.items.push({ nombre: this.listaDieta[this.items.length] });
      this.itemsSubject.next(this.items);
    }
  }

  eliminarElmenento(index: number) {
    this.items.splice(index, 1);
    this.itemsSubject.next(this.items);
  }
}
