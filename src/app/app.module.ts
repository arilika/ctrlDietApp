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



@NgModule({
  declarations: [
    AppComponent,
    NgStyleComponentComponent,
    IntroserviciosComponent,


  ],
  imports: [
    BrowserModule,
    DietaModule,
    MiperfilModule,
    BonusModule,
    MybootstrapModule,
    FormsModule
  ],
  providers: [DatosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
