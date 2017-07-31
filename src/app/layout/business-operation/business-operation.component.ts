import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-business-operation',
    templateUrl: './business-operation.component.html',
    animations:[routerTransition()]
})

export class BusinessOperationComponent{

}