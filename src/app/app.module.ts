import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BonusModule } from './bonus/bonus.module';
import { DietaModule } from './dieta/dieta.module';
import { MiperfilModule } from './miperfil/miperfil.module';
import { MybootstrapModule } from './mybootstrap/mybootstrap.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AppComponent,


  ],
  imports: [
    BrowserModule,
    DietaModule,
    MiperfilModule,
    BonusModule,
    MybootstrapModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
