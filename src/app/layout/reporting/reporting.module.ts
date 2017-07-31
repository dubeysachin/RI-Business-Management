import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReportingRoutingModule } from './reporting-routing.module';
import { ReportingComponent } from './reporting.component';
import { PageHeaderModule, StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        ReportingRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [
        ReportingComponent
    ]
})

export class ReportingModule{
    
}