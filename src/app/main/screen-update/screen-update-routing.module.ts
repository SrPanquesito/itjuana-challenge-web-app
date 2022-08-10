import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ScreenUpdateComponent } from './container/screen-update.component';
import { ScreenUpdateResolver } from './container/screen-update.resolver';

const routes: Routes = [
  { path: '', component: ScreenUpdateComponent },
  { 
    path: ':id',
    component: ScreenUpdateComponent,
    resolve: { user: ScreenUpdateResolver },
    runGuardsAndResolvers: 'paramsOrQueryParamsChange'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreenUpdateRoutingModule { }
