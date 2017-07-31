import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaintenanceRoutingModule } from './maintenance-routing.module';
import { MaintenanceComponent } from './maintenance.component';
import { PageHeaderModule, StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        MaintenanceRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [
        MaintenanceComponent
    ]
})

export class MaintenanceModule{
    
}