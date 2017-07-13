import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

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
        private utilService: UtilService,
        private router: Router
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
        
        this.gridAction.deleteItem = (item) => {
            console.log('delete: ', item);
                return new Promise(resolve => {
                    this.userService.delete(item)
                    .subscribe(response => {   
                        console.log(response);                                               
                        if (response.success) {                                                        
                            resolve();
                            this.utilService.successNotification();
                        }  else {
                            this.utilService.errorNotification();
                        }                    
                        
                    });
                });
            };

        this.sourceApi = (filter: FilterModel) => {  
                console.log(filter);                              
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
                { name: 'email', type: 'text', title: 'Email', width: 180,
                    itemTemplate: function(value, item) {                                          
                        return `<a class='info' href='/dashboard/user/${item.userId}'>${value}</a>`;
                    },
                },
                { name: 'name', type: 'text', title: 'Nombre'},
                { name: 'lastName', type: 'text', title: 'Apellido' },
                { name: 'creationDate', type: 'text', title: 'F. Creación', filtering: false},
                { name: 'status', type: 'checkbox',  title: 'Activo', filtering: true},                
                // { name: 'select', type: 'select', items: [ "", "United States", "Canada", "United Kingdom" ] },
                { type: 'control',  modeSwitchButton: false, editButton: false, 
                    // itemTemplate: function(value, item) {
                    //     var $result = this.__proto__.itemTemplate.call(this, value, item); //the default buttons
                    //     let iconEl = $('<i>').attr('class', 'icon-edit');                        
                    //     let editEl = $("<a>").attr({rol: 'button', class: 'btn btn-outline-primary btn-sm'});
                    //     editEl.append(iconEl);
                    //     var $myButton = editEl.click(function() { console.log('my button clicked') });
                        
                    //     return $result.add($myButton);
                    // },
                 },
                // { name: 'Acción', type: 'text', width: 50,
                //     itemTemplate: function(value, item) {                                          
                //         return `
                //                 <a role="button" [routerLink]="['/dashboard/user/id/${item.ID}']" class="btn btn-outline-primary btn-sm">
                //                     <i class="icon-edit"></i>
                //                 </a>
                //                 <a role="button" (click)="delete(${item.ID})" class="btn btn-outline-secondary btn-sm">
                //                     <i class="icon-trash-o"></i>
                //                 </a>`;
                //     },
                //     filtering: false,
                // }
            ],
            editing: false,
            filtering: true,
            selecting: false,
            inserting: false,
            deleteConfirm: function(item) {
                return "Esta seguro de elminar el registro?";
            },
            pageSize: 10,
            paging: true ,

            //paginator
            pagerFormat: "Páginas: {first} {prev} {pages} {next} {last} &nbsp;&nbsp; {pageIndex} de {pageCount}",
            pagePrevText: "<",
            pageNextText: ">",
            pageFirstText: "<<",
            pageLastText: ">>",        
            pageNavigatorNextText: "&#8230;",
            pageNavigatorPrevText: "&#8230;",

            // onDataLoading: function(args) {
            //     console.log('onloading', args);
            // },

            // onItemDeleting: function(args) {
            //     console.log('onItemDeleting', args);
            // },

            // onItemUpdating: function(args) {                
            //     console.log('onItemDeleting', args);
            // },
        };
        
    }

    ngAfterViewInit() {                    
    }        
}
