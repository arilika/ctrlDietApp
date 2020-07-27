import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgStyleComponentComponent } from 'src/app/ng-style-component/ng-style-component.component';
import { IntroserviciosComponent } from 'src/app/introservicios/introservicios.component';

const routes: Routes = [
  {
    path: '',
    component: IntroserviciosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InicioRoutingModule { }
