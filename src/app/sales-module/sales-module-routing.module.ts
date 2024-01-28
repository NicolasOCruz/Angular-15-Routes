import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesComponent } from './sales/sales.component';
import { SalesIndexComponent } from './sales-index/sales-index.component';

const routes: Routes = [
  {
    path: '',
    component: SalesIndexComponent,
    children: [
      {
        path: '',
        component: SalesListComponent
      },
      {
        path: ':id',
        component: SalesComponent
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SalesModuleRoutingModule { }
