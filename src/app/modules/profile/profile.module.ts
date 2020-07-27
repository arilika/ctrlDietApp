import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ObtenerUsuarioComponent } from 'src/app/gets/obtener-usuario/obtener-usuario.component';


@NgModule({
  declarations: [ObtenerUsuarioComponent],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class ProfileModule { }
