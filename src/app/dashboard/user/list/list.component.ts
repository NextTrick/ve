import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';

import { PageResponse, FilterModel, ODataController } from 'ng2-jsgrid';

//services
import { UserService } from '../../../service/user.service';
import { UtilService } from '../../../common/service/util.service';

@Component({
    selector: 'user-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class ListComponent implements OnInit {

    options: any;
    sourceApi: any;
    gridAction = new ODataController();

    constructor(
        private http: Http,
        private userService: UserService,
        private utilService: UtilService
    ) {

    }

    ngOnInit() {
        this.gridAction.updateItem = (item) => {
                return new Promise(resolve => {
                    // CALL TO API
                });
            };

        this.gridAction.insertItem = (item) => {
                return new Promise(resolve => {
                    // CALL TO API
                });
            };

        this.sourceApi = (filter: FilterModel) => {                                
                return new Promise(resolve => {                    
                    this.userService.getAll(filter)
                    .subscribe(response => {   
                        console.log(response);                                               
                        if (response.success) {                            
                            const source: PageResponse = {
                                data: response.data.listData,
                                itemsCount: response.data.count
                            };
                            resolve(source);
                        }  else {
                            this.utilService.errorNotification();
                        }                    
                        
                    });
                });
            };
        
        this.options = {
            fields: [
                // { name: 'userId', type: 'text', width: 50 },
                { name: 'Email', type: 'text', width: 180,
                    itemTemplate: function(value, item) {
                        return `<a class='info' href='${value}'>${value}</a>`;
                    },
                },
                { name: 'Nombre', type: 'text', },
                { name: 'Apellido', type: 'text', },
                { name: 'F Creacion', type: 'text', },
                { name: 'Activo', type: 'checkbox', },                
                // { name: 'select', type: 'select', items: [ "", "United States", "Canada", "United Kingdom" ] },
                { name: '-', type: 'control' }
            ],
            editing: false,
            selecting: false,
            inserting: true,
            pageSize: 10,
            paging: true           
        };
        
    }

    ngAfterViewInit() {                    
    }    
}
