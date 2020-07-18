import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listadieta',
  templateUrl: './listadieta.component.html',
  styleUrls: ['./listadieta.component.css']
})
export class ListadietaComponent implements OnInit {
  @Input() listaDieta;
  constructor() { }

  ngOnInit(): void {
  }

}
