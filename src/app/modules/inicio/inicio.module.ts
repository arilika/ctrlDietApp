import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
import { IntroserviciosComponent } from 'src/app/introservicios/introservicios.component';

@NgModule({
  declarations: [IntroserviciosComponent],
  imports: [
    CommonModule,
    InicioRoutingModule
  ]
})
export class InicioModule { }
