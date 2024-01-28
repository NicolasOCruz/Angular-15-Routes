import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesModuleRoutingModule } from './sales-module-routing.module';
import { SalesComponent } from './sales/sales.component';
import { SalesListComponent } from './sales-list/sales-list.component';
import { SalesIndexComponent } from './sales-index/sales-index.component';


@NgModule({
  declarations: [
    SalesComponent,
    SalesIndexComponent,
    SalesListComponent
  ],
  imports: [
    CommonModule,
    SalesModuleRoutingModule
  ]
})
export class SalesModuleModule { }
