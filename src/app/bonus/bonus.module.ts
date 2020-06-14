import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalculoaguaComponent } from './calculoagua/calculoagua.component';



@NgModule({
  declarations: [CalculoaguaComponent],
  imports: [
    CommonModule
  ],
  exports: [
    CalculoaguaComponent
  ]
})
export class BonusModule { }
