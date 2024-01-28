import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplateComponent } from './layouts/template/template.component';

const routes: Routes = [
  //Aqui são os módulos raizes somente
  //Modulos que nao ficam abaixo de componentes comuns devem ser declarados primeiro
  {
    path: 'errors',
    loadChildren: () => import('../shared/errors-module/errors-module.module').then(m => m.ErrorsModuleModule),
    data: { title: 'Error Module' }
  },
  {
    path: '',
    component: TemplateComponent, //comentar se nao precisar ter um componente comum
    children: [
      {
        path: '',
        redirectTo: 'processes',
        pathMatch: 'full'
      },
      {
        path: 'processes',
        loadChildren: () => import('../app/processes-module/processes-module.module').then(m => m.ProcessesModuleModule),
        data: { title: 'Processes Module' }
      },
      {
        path: 'sales',
        loadChildren: () => import('../app/sales-module/sales-module.module').then(m => m.SalesModuleModule),
        data: { title: 'Sales Module' }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
