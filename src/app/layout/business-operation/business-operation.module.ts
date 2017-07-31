import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BusinessOperationRoutingModule } from './business-operation-routing.module';
import { BusinessOperationComponent } from './business-operation.component';
import { PageHeaderModule, StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        BusinessOperationRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [
        BusinessOperationComponent
    ]
})

export class BusinessOperationModule{
    
}