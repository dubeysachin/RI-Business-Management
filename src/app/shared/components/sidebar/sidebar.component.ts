import { Component } from '@angular/core';

import { Menus,SubMenus } from './menus';

const menus: Menus[] =[
    {name:'dashboard', display:'Dashboard', link:'/dashboard', iconClass:'fa fa-fw fa-dashboard',subMenu:false},
    {name:'accounting', display:'Accounting', link:'/accounting', iconClass:'fa fa-bank',subMenu:false},
    {name:'businessOperation', display:'Business Operation', link:'/business-operation', iconClass:'fa fa-fw fa-table',subMenu:false},
    {name:'inventoryStock', display:'Inventory/Stock', link:'/inventory-stock', iconClass:'fa fa-fw fa-edit',subMenu:false},
    {name:'reporting', display:'Reporting', link:'/reporting', iconClass:'fa fa-fw fa-desktop',subMenu:false},
    {name:'maintenance', display:'Maintenance', link:'/maintenance', iconClass:'fa fa-fw fa-wrench',subMenu:false},
    {name:'gprstracking', display:'GPRS Tracking', link:'/gprs-tracking', iconClass:'fa fa-globe',subMenu:false},
    {name:'master', display:'Masters', link:'', iconClass:'fa fa-plus', subMenu:true}
];

const subMenus: SubMenus[] =[
    {name:'employees', parent:'master', display:'Employees', link:'/employees/', iconClass:'fa fa-user-o'},
    {name:'machines',parent:'master', display:'Machines', link:'/machines/', iconClass:'fa fa-truck'},
    {name:'clients',parent:'master', display:'Clients', link:'/clients/', iconClass:'fa fa-id-card-o'},
    {name:'vendors',parent:'master', display:'Vendors', link:'/vendors/', iconClass:'fa fa-handshake-o'}
]


@Component({
    selector: 'app-sidebar',
    templateUrl: './sidebar.component.html',
    styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
    isActive = false;
    showMenu = '';

    menus = menus;
    subMenus = subMenus;

    eventCalled() {
        this.isActive = !this.isActive;
    }
    addExpandClass(menu:Menus ) {
        if(menu.subMenu == true){
            if (menu.name === this.showMenu) {               
                this.showMenu ='0';
            } else {
                this.showMenu = menu.name;
            }
        }
    }

    
}
