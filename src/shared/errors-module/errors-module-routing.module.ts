import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorIndexComponent } from './errors-index/error-index.component';
import { HttpErrorComponent } from './http-error/http-error.component';
import { ConnectionErrorComponent } from './connection-error/connection-error.component';
import { MaintanceErrorComponent } from './maintance-error/maintance-error.component';

const routes: Routes = [
  {
    path: '',
    component: ErrorIndexComponent, //comentar se não precisar ter um componente index
    children: [
      {
        path: 'http',
        component: HttpErrorComponent
      },
      {
        path: 'connection',
        component: ConnectionErrorComponent
      },
      {
        path: 'maintance',
        component: MaintanceErrorComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ErrorsModuleRoutingModule { }
