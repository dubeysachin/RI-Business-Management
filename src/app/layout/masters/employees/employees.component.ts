import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../../../router.animations';
import { Employee } from './employee';

const EMPLOYEES:Employee[] = [
    {id:1, firstName: 'Tom', lastName: 'Jerry',mobileNo:'+91-98653-78451', emailAddress:'tom@jerry.com', dob: '01/01/1986', address:'Tom address', state:'Jammu', city:'Jammu', pinCode:123456},
    {id:2, firstName: 'Donald', lastName: 'Duck',mobileNo:'+91-98653-78452', emailAddress:'donald@duck.com', dob: '02/02/1987', address:'Donald address', state:'Haryana', city:'Faridabad', pinCode:121008},
    {id:3, firstName: 'Tales', lastName: 'Pin',mobileNo:'+91-98653-78453', emailAddress:'tales@pin.com', dob: '03/03/1988', address:'Tales address', state:'Uttar Pradesh', city:'Agra', pinCode:654321},
    {id:4, firstName: 'Chota', lastName: 'Bheem',mobileNo:'+91-98653-78454', emailAddress:'chota@bheen.com', dob: '04/04/1989', address:'Bheen address', state:'Madhya Pradesh', city:'Bhopal', pinCode:987456},
    {id:5, firstName: 'Scobby', lastName: 'Do',mobileNo:'+91-98653-78455', emailAddress:'scobby@do.com', dob: '05/11/1990', address:'Scobby address', state:'Rajasthan', city:'Jaipur', pinCode:654789},
];

@Component({
    selector:'app-employees',
    templateUrl : './employees.component.html',
    animations:[routerTransition()]
})

export class EmployeesComponent implements OnInit {

    constructor(private router: Router){}
    employees = EMPLOYEES;
    selectedEmployee:Employee;

    ngOnInit(): void{

    }

    selectedRow(employee: Employee): void{
        this.selectedEmployee = employee;        
        this.router.navigate(['/employees/detail',this.selectedEmployee.id])
    }

    addEmployee(): void{
        this.router.navigate(['/employees/detail',0])
    }
}