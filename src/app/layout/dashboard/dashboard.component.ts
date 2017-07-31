import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {

    public barChartOptions: any = {
        scaleShowVerticalLines: false,
        responsive: true
    };
    public barChartLabels: string[] = ['2011', '2012', '2013', '2014', '2015', '2016', '2017'];
    public barChartType: string = 'bar';
    public barChartLegend: boolean = true;

    public barChartData: any[] = [
        { data: [65, 59, 80, 81, 56, 55, 40], label: 'Work orders' },        
    ];

    public pieChartLabels: string[] = ['Damage', 'Ready for Service' ,'Repair'];
    public pieChartData: number[] = [5, 50, 20];
    public pieChartType: string = 'pie';

    ngOnInit() {
    }

    // events
    public chartClicked(e: any): void {
        // console.log(e);
    }

    public chartHovered(e: any): void {
        // console.log(e);
    }

    
}
