import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  title = 'ctrlDiet';
  currentValue: boolean = true;
  isActive: boolean = true;
  comidas: string[];
  constructor() {
    this.comidas = ["lista vieja", "Pinto con huevo", "Tortilla con Queso", "1T Frutas", "12 Almendras", "Porcion Carne con Ensalada", "Porcion Carne con Picadillo", "1T Pasta", "Sopa", "1 Paquete de Galleta con Queso", "1 Manzana", "Ceviche", "Vegetales"];

  }

  ngOnInit(): void {

  }

}
