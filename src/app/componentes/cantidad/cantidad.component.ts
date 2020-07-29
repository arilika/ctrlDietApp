import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ListadoService } from 'src/app/servicio/listado.service';

@Component({
  selector: 'app-cantidad',
  templateUrl: './cantidad.component.html',
  styleUrls: ['./cantidad.component.css']
})
export class CantidadComponent implements OnInit {
  public contador = 0;
  public subscription: Subscription;

  constructor(private listadoService: ListadoService) { }

  ngOnInit() {
    this.subscription = this.listadoService.itemsObservable$
      .subscribe((items: Array<{ nombre: string }>) => {
        this.contador = items.length;
      });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}

