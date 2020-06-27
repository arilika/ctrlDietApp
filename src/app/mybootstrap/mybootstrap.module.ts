import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TimepickerModule } from 'ngx-bootstrap/timepicker';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BsDropdownModule.forRoot(),
    TimepickerModule.forRoot(),
    ModalModule.forRoot(),
    TooltipModule.forRoot(),

  ],
  exports: [
    BsDropdownModule, TimepickerModule, TooltipModule, ModalModule
  ]
})
export class MybootstrapModule { }
