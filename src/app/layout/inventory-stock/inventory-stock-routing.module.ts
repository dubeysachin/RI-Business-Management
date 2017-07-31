import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InventoryStockComponent } from './inventory-stock.component';

const routes: Routes = [
    { path: '', component: InventoryStockComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InventoryStockRoutingModule { }
