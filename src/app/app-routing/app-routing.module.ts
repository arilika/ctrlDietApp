import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { NoEncontradoComponent } from '../no-encontrado/no-encontrado.component';
import { ObtenerUsuarioComponent } from '../gets/obtener-usuario/obtener-usuario.component';
import { ContactoTDrivenComponent } from '../paginas/contacto-tdriven/contacto-tdriven.component';
import { ListadoComponent } from '../componentes/listado/listado.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil/:id', component: ObtenerUsuarioComponent },
  { path: 'plan', component: ListadoComponent },
  { path: 'contactoTD', component: ContactoTDrivenComponent },
  { path: '**', component: NoEncontradoComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
