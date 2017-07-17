import { Component, OnInit } from '@angular/core';

    //components
import { NextNg2TableComponent } from '../../../../common/component/next-ng2-table/next-ng2-table.component';

import { TableData } from './table-data';

@Component({
    selector: 'detail-table1',
    templateUrl: './table1.component.html',
    styleUrls: ['./table1.component.css']
})
export class Table1Component extends NextNg2TableComponent implements OnInit {
    public columns: Array<any> = [
        { 
            title: 'Name', name: 'name', sort: false,
        },
        {
            title: 'Position', name: 'position', sort: false,
        },
        { 
            title: 'Office', name: 'office', sort: 'asc' 
        },
        { 
            title: 'Extn.', name: 'ext', sort: '',             
        },
        { 
            title: 'Start date', name: 'startDate' 
        },
        { 
            title: 'Salary ($)', name: 'salary' 
        }
    ];
    
    public itemsPerPage: number = 5; 

    public data: Array<any> = TableData;

    public constructor() {
        super();        
    }

    public ngOnInit(): void {        
        this.totalItems = this.data.length;        
        this.onChangeTable(this.config);
    }
}
