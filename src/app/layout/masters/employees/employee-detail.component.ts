import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../../router.animations';

@Component({
    selector:'detail',
    templateUrl : './employee-detail.component.html',
    animations:[routerTransition()]
})

export class EmployeeDetailComponent implements OnInit{
  ngOnInit(): void{

  }  
}
