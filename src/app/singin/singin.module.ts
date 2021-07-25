import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SinginRoutingModule } from './singin-routing.module';
import { SinginComponent } from './singin.component';


@NgModule({
  declarations: [
    SinginComponent
  ],
  imports: [
    CommonModule,
    SinginRoutingModule
  ]
})
export class SinginModule { }
