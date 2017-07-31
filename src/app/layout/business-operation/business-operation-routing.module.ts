import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BusinessOperationComponent } from './business-operation.component';

const routes: Routes = [
    { path: '', component: BusinessOperationComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BusinessOperationRoutingModule { }
