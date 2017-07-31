import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryStockRoutingModule } from './inventory-stock-routing.module';
import { InventoryStockComponent } from './inventory-stock.component';
import { PageHeaderModule, StatModule } from '../../shared';

@NgModule({
    imports: [
        CommonModule,
        InventoryStockRoutingModule,
        PageHeaderModule,
        StatModule
    ],
    declarations: [
        InventoryStockComponent
    ]
})

export class InventoryStockModule{
    
}