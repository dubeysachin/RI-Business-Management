import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChartsModule as Ng2Charts } from 'ng2-charts';


import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { PageHeaderModule, StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        Ng2Charts,
        DashboardRoutingModule,
        PageHeaderModule,
        StatModule,
    ],
    declarations: [
        DashboardComponent
    ]
})
export class DashboardModule { }
