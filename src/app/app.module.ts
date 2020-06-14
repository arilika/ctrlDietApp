import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
//import { BonusModule } from './bonus/bonus.module';
import { DietaModule } from './dieta/dieta.module';
import { MiperfilModule } from './miperfil/miperfil.module';


@NgModule({
  declarations: [
    AppComponent,
    //BonusModule

  ],
  imports: [
    BrowserModule,
    DietaModule,
    MiperfilModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
