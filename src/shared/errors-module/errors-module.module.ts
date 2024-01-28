import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ErrorsModuleRoutingModule } from './errors-module-routing.module';
import { ConnectionErrorComponent } from './connection-error/connection-error.component';
import { HttpErrorComponent } from './http-error/http-error.component';
import { MaintanceErrorComponent } from './maintance-error/maintance-error.component';
import { ErrorIndexComponent } from './errors-index/error-index.component';
import { MaterialModule } from '../material-module/material.module';


@NgModule({
  declarations: [
    ConnectionErrorComponent,
    HttpErrorComponent,
    MaintanceErrorComponent,
    ErrorIndexComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    ErrorsModuleRoutingModule
  ]
})
export class ErrorsModuleModule { }
