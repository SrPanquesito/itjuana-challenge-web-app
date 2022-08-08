import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenUpdateComponent } from './container/screen-update.component';

const routes: Routes = [{ path: '', component: ScreenUpdateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenUpdateRoutingModule { }
