import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';
import { NgForm } from "@angular/forms";

import { PageResponse, FilterModel, ODataController } from 'ng2-jsgrid';

import { TableData } from './table-data';

//services
import { UserService } from '../../../service/user.service';
import { UtilService } from '../../../common/service/util.service';

//components
import { NextNg2TableComponent } from '../../../common/component/next-ng2-table/next-ng2-table.component';

export class Filter {
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    s?: string;
}

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
            // className: ['office-header', 'text-success'],             
            // sort: 'asc'
            // filtering: { filterString: '', placeholder: 'Filter by extn.' } 
        },
        {
            title: 'Rol',
            name: 'rolName', 
            sort: false,                         
        },
        {
            title: 'Productos',            
            name: 'products'
        },
        { 
            title: 'Action',
            name: 'action',
            sort: false 
        }
    ];
    
    public page: number = 1;
    public itemsPerPage: number = 5;        

    public config: any = {
        paging: true,
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered']
    };
    
    public filter: Filter =  new Filter();    

    constructor(
        private http: Http,
        private userService: UserService,
        private utilService: UtilService,
        private router: Router
    ) {               
        super();
    }

    ngOnInit() {                           
        this.onChangeTable(this.config);
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {            
        let sortParms  = this.getSortParams(config);
        this.filter.pageIndex = page.page;
        this.filter.pageSize = page.itemsPerPage;                
        this.filter.sortField = sortParms.columnName;
        this.filter.sortOrder = sortParms.sort;        
        this.filter.s = this.config.filtering.filterString;                          
        console.log('filterLog', this.filter);     
        this.getAll(this.filter);
    }    

    public getAll(filter: Filter) {
        this.userService.getAll(this.filter)
            .subscribe(response => {   
                console.log(response);                                               
                if (response.success) {                                                        
                    this.length = response.data.found;                    
                    this.data = response.data.listData; 
                    this.rows = this.data;                                          
                }  else {
                    this.utilService.errorNotification();
                }                
            });        
    }

    public onCellClick(data: any): any {
        switch (data.column) {
            case 'email': 
                this.router.navigate(['/dashboard/user/' + data.row.userId]);
                break;
            default: 
                console.log('clicked column', data.column);
                break;
        }
    }

    public onSearch(searchForm: any) {        
        let searchText = searchForm.value.search;         
        this.config.filtering.filterString = searchText;

        this.page = 1;
        this.filter.pageSize = this.itemsPerPage;
        this.filter.s = searchText;
        this.filter.pageIndex = this.page;
        this.getAll(this.filter); 
    }

    ngAfterViewInit() {                    
    }        
}
