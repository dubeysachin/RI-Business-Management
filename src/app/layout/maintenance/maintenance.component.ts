import { Component } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-maintenance',
    templateUrl: './maintenance.component.html',
    animations:[routerTransition()]
})

export class MaintenanceComponent{

}