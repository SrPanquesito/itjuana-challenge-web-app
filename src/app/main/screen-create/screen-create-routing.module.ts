import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenCreateComponent } from './container/screen-create.component';

const routes: Routes = [{ path: '', component: ScreenCreateComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenCreateRoutingModule { }
