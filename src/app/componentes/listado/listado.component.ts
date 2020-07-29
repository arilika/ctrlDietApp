import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from 'src/app/servicio/listado.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  public items = [];
  public subscription: Subscription;


  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.subscription = this.listadoService.itemsObservable$
      .subscribe((items: Array<{ nombre: string }>) => { this.items = items; },
        err => console.log("Se encontró el siguiente error: " + err),
        () => console.log("El observable esta completo!"));
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  crearElemento() {
    this.listadoService.crearElemento();
  }
  eliminarElemento(index: number) {
    this.listadoService.eliminarElmenento(index);
  }
}
