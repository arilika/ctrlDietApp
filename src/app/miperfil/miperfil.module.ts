import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatospersonalesComponent } from './datospersonales/datospersonales.component';
import { FormsModule } from '@angular/forms';
import { MybootstrapModule } from '../mybootstrap/mybootstrap.module';


@NgModule({
  declarations: [DatospersonalesComponent],
  imports: [
    CommonModule,
    FormsModule,
    MybootstrapModule
  ],
  exports: [
    DatospersonalesComponent
  ],
  providers: [],
  bootstrap: [DatospersonalesComponent]
})
export class MiperfilModule { }
