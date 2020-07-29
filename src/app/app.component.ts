import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ctrlDiet';
  imagePath: string = './assets/favicon.ico';
  currentValue: boolean = true;

  nombre: string = "Ariela";
  edad: number;
  direccion: {
    pais: string;
    provincia: string;
    ciudad: string;
  }
  isActive: boolean = true;
  tiemposComida = ["Desayuno", "Merienda", "Almuerzo", "Cafe", "Cena"];
  comidas: string[];


  constructor() {
    this.edad = 33;
    this.direccion = { pais: "Costa Rica", provincia: "San Jose", ciudad: "Alajuelita" };
    this.comidas = ["Pinto con huevo", "Tortilla con Queso", "1T Frutas", "12 Almendras", "Porcion Carne con Ensalada", "Porcion Carne con Picadillo", "1T Pasta", "Sopa", "1 Paquete de Galleta con Queso", "1 Manzana", "Ceviche", "Vegetales"];
  }
}
