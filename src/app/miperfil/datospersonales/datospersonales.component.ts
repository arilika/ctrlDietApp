import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datospersonales',
  templateUrl: './datospersonales.component.html',
  styleUrls: ['./datospersonales.component.css']
})
export class DatospersonalesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  name = "Ariela";
  email = "acarrillod@gmail.com";
  phone = "+(506)8816-0609";
  imc = "";
  weight = null;
  height = null;
  condition = "";

  calcularIMC(weight, height) {
    let bmi = parseInt(weight.value) / (parseInt(height.value) ** 2);
    this.imc = bmi.toString();
    this.calculateCondition(bmi);
    //return bmi;
    return false;
  }
  calculateCondition(imc) {
    let result = "";
    if (imc < 18.5) {
      result = "Bajo de Peso";
    } else if (imc < 25) {
      result = "Normal";
    } else if (imc < 30) {
      result = "Sobrepeso";
    } else {
      result = "Obesidad";
    }
    this.condition = result;
    return false;
  }
}
