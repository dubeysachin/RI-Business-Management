import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-gprs-tracking',
    templateUrl: './gprs-tracking.component.html',
    animations:[routerTransition()]
})

export class GPRSTrackingComponent{

}