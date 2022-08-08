import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenCreateRoutingModule } from './screen-create-routing.module';
import { ScreenCreateComponent } from './container/screen-create.component';


@NgModule({
  declarations: [
    ScreenCreateComponent
  ],
  imports: [
    CommonModule,
    ScreenCreateRoutingModule
  ]
})
export class ScreenCreateModule { }
