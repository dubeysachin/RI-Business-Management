import { NgModule } from '@angular/core';
import { Routes,RouterModule } from '@angular/router';

import { EmployeesComponent } from './employees.component';
import {  EmployeeDetailComponent } from './employee-detail.component';

const routes: Routes =[
    {path: '', component: EmployeesComponent},    
    {path: 'detail/:id', component: EmployeeDetailComponent}    
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class EmployeesRoutingModule { }