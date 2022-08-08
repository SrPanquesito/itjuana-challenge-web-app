import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenViewListComponent } from './container/screen-view-list.component';

const routes: Routes = [{ path: '', component: ScreenViewListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenViewListRoutingModule { }
