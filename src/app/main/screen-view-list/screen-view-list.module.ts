import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ScreenViewListRoutingModule } from './screen-view-list-routing.module';
import { ScreenViewListComponent } from './screen-view-list.component';


@NgModule({
  declarations: [
    ScreenViewListComponent
  ],
  imports: [
    CommonModule,
    ScreenViewListRoutingModule
  ]
})
export class ScreenViewListModule { }
