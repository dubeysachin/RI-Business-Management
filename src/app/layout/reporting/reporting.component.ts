import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-reporting',
    templateUrl: './reporting.component.html',
    animations:[routerTransition()]
})

export class ReportingComponent{

}