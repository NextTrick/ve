import { Component, OnInit } from '@angular/core';
import { NgForm } from "@angular/forms";

export class Filter {
    pageIndex?: number;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    s?: string;
    oneLoad?: boolean = false;
    extra?: Array<any> = [];
}

// @Component({
//     selector: 'next-ng2-table',
//     templateUrl: './next-ng2-table.component.html',
//     styleUrls: ['./next-ng2-table.component.css']
// })
export class NextNg2TableComponent implements OnInit {

    isLoading: boolean = false;
    
    public rows: Array<any> = [];
    public columns: Array<any> = [];
    
    public page: number = 1;
    public itemsPerPage: number = 10;
    public maxSize: number = 4;
    public numPages: number = 1;
    public totalItems: number = 0;

    public filter: Filter =  new Filter(); 

    public config: any = {
        paging: true,
        action: {
            active: true,
            edit: {active: false, uri: ''},
            remove: {active: false}
        },
        selection: {
            active: false,
        },
        sorting: { columns: this.columns },
        filtering: { filterString: '' },
        className: ['table-striped', 'table-bordered'],
        oneLoad: false,
    };

    public data: Array<any>;

    constructor(
        protected utilService: any = {},
        protected objectService: any = {}
    ) {
        this.initEmitter();
    }

    ngOnInit() {  
        this.loadData(this.config); 
    }

    public loadData(config: any = this.config, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }) {
        let sortParms  = this.getSortParams(config);
        this.filter.pageIndex = page.page;
        this.filter.pageSize = page.itemsPerPage;                
        this.filter.sortField = sortParms.columnName;
        this.filter.sortOrder = sortParms.sort;        
        this.filter.s = this.config.filtering.filterString; 

        if (this.config.oneLoad) {
            this.filter.oneLoad = true;
        }    

        this.getAll(this.filter, config, page);              
    }

    public getAll(filter: Filter, config, page) {
        this.objectService.getAll(filter)
            .subscribe(response => {                                                                  
                if (response.success) {
                    this.data = response.data.listData;                                         
                    if (this.config.oneLoad) {
                        this.processConfig(config, page);                                                         
                    } else {
                        this.totalItems = response.data.found;   
                        this.rows = this.data;
                    }                    
                }  else {
                    this.utilService.errorNotification();
                }                
            },
            error => console.log('error capturado', error)
        );  
    }

    public onRemoveClick(row: any): any {        
        this.objectService.delete(row.id)
            .subscribe(response => {   
                console.log(response);                                               
                if (response.success) {
                    this.loadData();
                    this.utilService.successNotification();                    
                }  else {
                    this.utilService.errorNotification();
                }                
            });  
    }    

    onSearch(searchForm: any) {        
        let searchText = searchForm.value.search;         
        this.config.filtering.filterString = searchText;

        this.loadData(this.config); 
    }

    public onCellClick(data: any): any {

    }

    public changePage(page: any, data: Array<any> = this.data): Array<any> {
        let start = (page.page - 1) * page.itemsPerPage;
        let end = page.itemsPerPage > -1 ? (start + page.itemsPerPage) : data.length;
        return data.slice(start, end);
    }

    public getSortParams(config: any): any {
        let columns = this.config.sorting.columns || [];
        let columnName: string = void 0;
        let sort: string = void 0;

        for (let i = 0; i < columns.length; i++) {
            if (columns[i].sort !== '' && columns[i].sort !== false) {
                columnName = columns[i].name;
                sort = columns[i].sort;
            }
        }

        return {
            columnName: columnName,
            sort: sort
        }
    }

    public changeSort(data: any, config: any): any {
        if (!config.sorting) {
            return data;
        }

        let sortParams = this.getSortParams(config);
        let columnName = sortParams.columnName;
        let sort = sortParams.sort;        
    
        if (!columnName) {
            return data;
        }

        // simple sorting
        return data.sort((previous: any, current: any) => {
            if (previous[columnName] > current[columnName]) {
                return sort === 'desc' ? -1 : 1;
            } else if (previous[columnName] < current[columnName]) {
                return sort === 'asc' ? -1 : 1;
            }
            return 0;
        });
    }

    public changeFilter(data: any, config: any): any {        
        let filteredData: Array<any> = data;
        this.columns.forEach((column: any) => {
            if (column.filtering) {
                filteredData = filteredData.filter((item: any) => {
                    return item[column.name].match(column.filtering.filterString);
                });
            }
        });
        
        if (!config.filtering) {
            return filteredData;
        }

        if (config.filtering.columnName) {
            return filteredData.filter((item: any) =>
                item[config.filtering.columnName].match(this.config.filtering.filterString));
        }

        let tempArray: Array<any> = [];
        filteredData.forEach((item: any) => {
            let flag = false;
            this.columns.forEach((column: any) => {
                if (item[column.name]) {
                    if (item[column.name].toString().match(this.config.filtering.filterString)) {
                        flag = true;
                    }
                }                
            });
            if (flag) {
                tempArray.push(item);
            }
        });
        filteredData = tempArray;

        return filteredData;
    }

    public processConfig(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }) {
        
        if (config.filtering) {
            Object.assign(this.config.filtering, config.filtering);
        }

        if (config.sorting) {
            Object.assign(this.config.sorting, config.sorting);
        }

        let filteredData = this.changeFilter(this.data, this.config);        
        let sortedData = this.changeSort(filteredData, this.config);                
        this.rows = page && config.paging ? this.changePage(page, sortedData) : sortedData;                  
        this.totalItems = sortedData.length;                
    }

    public onChangeTable(config: any, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }): any {    
        if (this.config.oneLoad) {                               
            this.processConfig(config, page);
        } else {            
            this.loadData(config, page);            
        }        
    }

    setObjectService(objectService: any) {
        this.objectService = objectService;
    }

    setUtilService(utilService: any) {
        this.utilService = utilService;
    }

    initEmitter() {
        this.utilService.isLoadingEmitter.subscribe(
            isLoading => {
                this.isLoading = isLoading;
            }
        );
    }
}
