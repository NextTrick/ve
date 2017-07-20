import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { PageResponse, FilterModel, ODataController } from 'ng2-jsgrid';

//services
import { UserService } from '../../../service/user.service';
import { AclService } from '../../../service/acl.service';
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
    public columns: Array<any> = [
        {
            title: 'Email', name: 'email',
            sort: false,
        },
        {
            title: 'Nombre',
            name: 'name',
            sort: false,            
        },
        {
            title: 'Apellido',
            name: 'lastName',
            sort: false,
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
    
    public page: number = 1;
    public itemsPerPage: number = 5;        
    public filter: Filter =  new Filter();            

    constructor(
        private http: Http,
        private router: Router,
        private userService: UserService,        
        private aclService: AclService,
        public utilService: UtilService,
    ) {               
        super();
        super.setObjectService(this.userService);        

        this.config.oneLoad = false;       
        this.config.action.edit.active = true;
        this.config.action.edit.uri = '/dashboard/user/';
        this.config.action.remove.active = true;        
    }

    ngOnInit() {             
        super.ngOnInit();
        // this.onChangeTable(this.config);
    }

    // public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {            
    //     let sortParms  = this.getSortParams(config);
    //     this.filter.pageIndex = page.page;
    //     this.filter.pageSize = page.itemsPerPage;                
    //     this.filter.sortField = sortParms.columnName;
    //     this.filter.sortOrder = sortParms.sort;        
    //     this.filter.s = this.config.filtering.filterString;                          
        
    //     this.getAll(this.filter);
    // }    

    // public getAll(filter: Filter) {
    //     this.userService.getAll(filter)
    //         .subscribe(response => {   
    //             console.log(response);                                               
    //             if (response.success) {                                                                            
    //                 this.totalItems = response.data.found;                    
    //                 this.data = response.data.listData; 
    //                 this.rows = this.data;                                          
    //             }  else {
    //                 this.utilService.errorNotification();
    //             }                
    //         });        
    // }

    // onPageChanged(event: any) {        
    //     this.filter.pageIndex = event.page;
    //     this.filter.pageSize = event.itemsPerPage;                                   
    //     this.getAll(this.filter);
    // }

    // onSearch(searchForm: any) {        
    //     let searchText = searchForm.value.search;         
    //     this.config.filtering.filterString = searchText;

    //     this.page = 1;
    //     this.filter.pageSize = this.itemsPerPage;
    //     this.filter.s = searchText;
    //     this.filter.pageIndex = this.page;
    //     this.getAll(this.filter); 
    // }

    ngAfterViewInit() {   
                         
    }        
}
