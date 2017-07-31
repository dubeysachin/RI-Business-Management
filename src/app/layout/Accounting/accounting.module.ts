import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AccountingRoutingModule } from './accounting-routing.module';
import { AccountingComponent } from './accounting.component';
import { PageHeaderModule, StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        AccountingRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [
        AccountingComponent
    ]
})

export class AccountingModule{
    
}