import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenUpdateRoutingModule } from './screen-update-routing.module';
import { ScreenUpdateComponent } from './container/screen-update.component';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [
    ScreenUpdateComponent
  ],
  imports: [
    CommonModule,
    ScreenUpdateRoutingModule,
    SharedModule
  ]
})
export class ScreenUpdateModule { }
