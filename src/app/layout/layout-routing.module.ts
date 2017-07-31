import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
    {
        path: '', component: LayoutComponent,
        children: [
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'accounting', loadChildren: './accounting/accounting.module#AccountingModule' },
            { path: 'business-operation', loadChildren: './business-operation/business-operation.module#BusinessOperationModule' },
            { path: 'inventory-stock', loadChildren: './inventory-stock/inventory-stock.module#InventoryStockModule' },
            { path: 'reporting', loadChildren: './reporting/reporting.module#ReportingModule' },
            { path: 'maintenance', loadChildren: './maintenance/maintenance.module#MaintenanceModule' },
            { path: 'gprs-tracking', loadChildren: './gprs-tracking/gprs-tracking.module#GPRSTrackingModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            { path: 'employees', loadChildren: './masters/employees/employees.module#EmployeesModule' },
            
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule { }
