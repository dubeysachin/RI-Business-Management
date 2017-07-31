import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-accounting',
    templateUrl: './accounting.component.html',
    animations:[routerTransition()]
})

export class AccountingComponent{

}