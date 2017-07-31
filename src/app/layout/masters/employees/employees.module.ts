import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesRoutingModule } from './employees-routing.module';
import { EmployeeDetailComponent } from './employee-detail.component';
import { EmployeesComponent } from './employees.component';
import { PageHeaderModule } from './../../../shared';

@NgModule({
    imports: [
        CommonModule,
        EmployeesRoutingModule,
        PageHeaderModule
    ],
    declarations: [EmployeesComponent,
        EmployeeDetailComponent
    ]
})

export class EmployeesModule { }