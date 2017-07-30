import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

//services
import { UserService } from '../../service/user.service';
import { AclService } from '../../service/acl.service';
import { UtilService } from '../../../common/service/util.service';

//components
import { NextNg2TableComponent, Filter } from '../../../common/component/next-ng2-table/next-ng2-table.component';

@Component({
    selector: 'user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ListComponent extends NextNg2TableComponent implements OnInit {

    public rows: Array<any> = [];
    // public columns: Array<any> = [
    //     {
    //         title: 'Email', name: 'email',
    //         sort: false,
    //     },
    //     {
    //         title: 'Nombre',
    //         name: 'name',
    //         sort: false,            
    //     },
    //     {
    //         title: 'Apellido',
    //         name: 'lastName',
    //         sort: false,
    //     },
    //     {
    //         title: 'Rol',
    //         name: 'rolName', 
    //         sort: false,                         
    //     },
    //     {
    //         title: 'Productos',            
    //         name: 'products',
    //         sort: false,
    //     }        
    // ];    

    public columns: Array<any> = [
        {
            title: 'Email', name: 'email',
            sort: 'asc',
        },
        {
            title: 'Nombre',
            name: 'name',
            sort: 'desc',            
        },
        {
            title: 'Apellido',
            name: 'lastName',
            sort: '',
        },
        {
            title: 'Rol',
            name: 'rolName', 
            sort: false,                         
        },
        {
            title: 'Productos',            
            name: 'products',
            sort: false,
        }        
    ]; 

    constructor(
        private http: Http,
        private router: Router,
        private userService: UserService,        
        private aclService: AclService,
        protected utilService: UtilService,
    ) {               
        super(utilService, userService);        

        this.config.oneLoad = false;
        this.config.action.edit.active = true;
        this.config.action.edit.uri = '/dashboard/user/';
        this.config.action.remove.active = true;   
        this.config.sorting.columns =  this.columns;
        this.itemsPerPage = 10;        
    }

    ngOnInit() {             
        super.ngOnInit();
        // this.onChangeTable(this.config);
    }

    ngAfterViewInit() {   
                         
    }        
}
