import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'create',
        loadChildren: () => import('./screen-create/screen-create.module').then(m => m.ScreenCreateModule)
      },
      {
        path: 'view-list',
        loadChildren: () => import('./screen-view-list/screen-view-list.module').then(m => m.ScreenViewListModule)
      },
      {
        path: 'update',
        loadChildren: () => import('./screen-update/screen-update.module').then(m => m.ScreenUpdateModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
