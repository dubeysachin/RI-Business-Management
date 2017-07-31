import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GPRSTrackingComponent } from './gprs-tracking.component';

const routes: Routes = [
    { path: '', component: GPRSTrackingComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GPRSTrackingRoutingModule { }
