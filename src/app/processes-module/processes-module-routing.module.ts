import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcessesIndexComponent } from './processes-index/processes-index.component';
import { ProcessesListComponent } from './processes-list/processes-list.component';
import { ProcessesComponent } from './processes/processes.component';
import { ProcessResolver } from './services/process-resolver.service';

const routes: Routes = [
  {
    path: '',
    component: ProcessesIndexComponent,
    children: [
      { 
        path: '', 
        component: ProcessesListComponent, 
        data: { title: 'Processes List Component' } },
      {
        path: ':processId',
        component: ProcessesComponent,
        data: { title: 'Processes Details Component' },
        resolve: {
          processId: ProcessResolver
        }
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessesModuleRoutingModule { }
