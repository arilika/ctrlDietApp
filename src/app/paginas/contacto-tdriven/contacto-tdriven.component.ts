import { Component, OnInit } from '@angular/core';
import { User, generoEnum } from 'src/app/modelos/user';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contacto-tdriven',
  templateUrl: './contacto-tdriven.component.html',
  styleUrls: ['./contacto-tdriven.component.css']
})
export class ContactoTDrivenComponent implements OnInit {
  generoKeys = Object.keys(generoEnum);
  generoKeys2: any = this.generoKeys.slice(this.generoKeys.length / 2);

  miUsuario = new User(1, 'Ariela Carrillo', 'acarrillo@email.com', '8888-8888', true, 'mujer');

  submitted = false;

  onSubmit(usuarioForm: NgForm) {
    console.log('form', usuarioForm);
    console.log('form controls', usuarioForm.controls);
    console.log('form value', usuarioForm.value);
    console.log('miUsuario', this.miUsuario);

    if (usuarioForm.form.valid) {
      this.submitted = true;
    } else {
      console.log('Formulario Invalido.');
    }

  }
  nuevoUsuario() {
    this.miUsuario = new User(3, 'Ingresar el nombre', 'Ingresar correo electronico', 'Ingresar Telefono', false, '', '');
  }

  constructor() { }

  ngOnInit() {
  }

}
