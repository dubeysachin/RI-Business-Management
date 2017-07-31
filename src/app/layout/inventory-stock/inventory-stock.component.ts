import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-inventory-stock',
    templateUrl: './inventory-stock.component.html',
    animations:[routerTransition()]
})

export class InventoryStockComponent{

}