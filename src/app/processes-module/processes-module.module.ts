import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProcessesComponent } from './processes/processes.component';
import { MaterialModule } from 'src/shared/material-module/material.module';
import { ProcessesListComponent } from './processes-list/processes-list.component';
import { ProcessesIndexComponent } from './processes-index/processes-index.component';
import { ProcessesModuleRoutingModule } from './processes-module-routing.module';



@NgModule({
  declarations: [
    ProcessesComponent,
    ProcessesListComponent,
    ProcessesIndexComponent
  ],
  imports: [
    CommonModule,
    ProcessesModuleRoutingModule,
    MaterialModule
  ]
})
export class ProcessesModuleModule { }
