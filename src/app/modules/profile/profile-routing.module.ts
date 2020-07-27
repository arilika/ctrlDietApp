import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ObtenerUsuarioComponent } from 'src/app/gets/obtener-usuario/obtener-usuario.component';


const routes: Routes = [
  {
    path: '',
    component: ObtenerUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
