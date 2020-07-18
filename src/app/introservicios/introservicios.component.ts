import { Component, OnInit } from '@angular/core';
import { DatosService } from '../datos.service';

@Component({
  selector: 'app-introservicios',
  templateUrl: './introservicios.component.html',
  styleUrls: ['./introservicios.component.css'],
  providers: [DatosService]
})
export class IntroserviciosComponent implements OnInit {

  constructor(private dato: DatosService) { }

  ngOnInit(): void {
  }
  guardarBtnClick() {
    this.dato.confirmarGuardar("Se ha guardado la informacion!");
  }
}
