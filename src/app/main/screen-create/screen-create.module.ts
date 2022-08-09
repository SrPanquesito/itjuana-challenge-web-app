import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenCreateRoutingModule } from './screen-create-routing.module';
import { ScreenCreateComponent } from './container/screen-create.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ScreenCreateComponent
  ],
  imports: [
    CommonModule,
    ScreenCreateRoutingModule,
    SharedModule
  ]
})
export class ScreenCreateModule { }
