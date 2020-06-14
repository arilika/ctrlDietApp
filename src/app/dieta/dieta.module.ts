import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListadietaComponent } from './listadieta/listadieta.component';



@NgModule({
  declarations: [ListadietaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    ListadietaComponent
  ]
})
export class DietaModule { }
