import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from '../inicio/inicio.component';
import { PerfilComponent } from '../perfil/perfil.component';
import { HistorialComponent } from '../historial/historial.component';
import { AppComponent } from '../app.component';
import { NoEncontradoComponent } from '../no-encontrado/no-encontrado.component';
import { ContactoComponent } from '../contacto/contacto.component';
import { ObtenerUsuarioComponent } from '../gets/obtener-usuario/obtener-usuario.component';
import { ContactoTDrivenComponent } from '../paginas/contacto-tdriven/contacto-tdriven.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'perfil/:id', component: ObtenerUsuarioComponent },//PerfilComponent
  { path: 'historial', component: HistorialComponent },
  { path: 'contactoTD', component: ContactoTDrivenComponent },
  //{ path: 'perfil/3', loadChildren: './modules/profile/profile.module#ProfileModule' },
  { path: '**', component: NoEncontradoComponent }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]

})
export class AppRoutingModule { }
