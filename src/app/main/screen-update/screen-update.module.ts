import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenUpdateRoutingModule } from './screen-update-routing.module';
import { ScreenUpdateComponent } from './screen-update.component';


@NgModule({
  declarations: [
    ScreenUpdateComponent
  ],
  imports: [
    CommonModule,
    ScreenUpdateRoutingModule
  ]
})
export class ScreenUpdateModule { }
