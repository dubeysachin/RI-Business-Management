import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GPRSTrackingRoutingModule } from './gprs-tracking-routing.module';
import { GPRSTrackingComponent } from './gprs-tracking.component';
import { PageHeaderModule, StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        GPRSTrackingRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [
        GPRSTrackingComponent
    ]
})

export class GPRSTrackingModule{
    
}