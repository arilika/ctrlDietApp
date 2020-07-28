import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BonusModule } from './bonus/bonus.module';
import { DietaModule } from './dieta/dieta.module';
import { MiperfilModule } from './miperfil/miperfil.module';
import { MybootstrapModule } from './mybootstrap/mybootstrap.module';
import { FormsModule } from '@angular/forms';
import { NgStyleComponentComponent } from './ng-style-component/ng-style-component.component';
import { IntroserviciosComponent } from './introservicios/introservicios.component';
import { DatosService } from './datos.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { ObtenerUsuarioComponent } from './gets/obtener-usuario/obtener-usuario.component'
import { AppRoutingModule } from './app-routing/app-routing.module';
import { NoEncontradoComponent } from './no-encontrado/no-encontrado.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContactoTDrivenComponent } from './paginas/contacto-tdriven/contacto-tdriven.component';



@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponentComponent,
    IntroserviciosComponent,
    ObtenerUsuarioComponent,
    NoEncontradoComponent,
    ContactoComponent,
    ContactoTDrivenComponent,


  ],
  imports: [
    BrowserModule,
    DietaModule,
    MiperfilModule,
    BonusModule,
    MybootstrapModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
