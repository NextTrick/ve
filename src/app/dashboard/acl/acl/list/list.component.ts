import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

//services
import { ResourceService } from '../../../../service/resource.service';
import { AclService } from '../../../../service/acl.service';
import { RolService } from '../../../../service/rol.service';
import { UtilService } from '../../../../common/service/util.service';

//components
import { NextNg2TableComponent, Filter } from '../../../../common/component/next-ng2-table/next-ng2-table.component';

@Component({
  selector: 'acl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends NextNg2TableComponent implements OnInit {

  columns: Array<any> = [        
        {
            title: 'Nombre', name: 'name', sort: false,       
        },
        {
            title: 'Recurso', name: 'uri', sort: false,       
        },               
    ];

    roles: Array<any>;
    checkedResourceIds: Array<any> = [];

    constructor(
        private http: Http,
        private router: Router,
        protected resourceService: ResourceService,                
        protected utilService: UtilService,
        private rolService: RolService,
        private aclService: AclService,
    ) {               
        super(utilService, resourceService);        
        
        this.config.action.active = false;        
        this.config.selection.active = true;
        this.itemsPerPage = 5;
        this.config.oneLoad = true;
    }

    ngOnInit() {
        this.rolService.getActiveRoles()
            .subscribe(
                (response) => {
                    if (response.success) {
                        let roles = response.data.roles; 
                        this.loadRoles(roles);                                          
                    }  else {
                        this.utilService.errorNotification();
                    }
                }
            );

        super.ngOnInit();
    }

    loadRoles(roles) {
        this.roles = roles;
    }

    onRolChange(rolId: number) {
        this.filter.pageIndex = this.page;         
        this.filter.extra = [];      
        this.filter.extra.push({rolId: rolId});    
        this.getAll(this.filter);    
    }

    public getAll(filter: Filter, config: any = this.config, page: any = { page: this.page, itemsPerPage: this.itemsPerPage }) {
        this.resourceService.getAllByRol(this.filter)
            .subscribe(
                (response) => {
                    if (response.success) {
                        this.data = response.data.listData;
                        this.checkActiveItems(this.data);                                      
                        if (this.config.oneLoad) {                            
                            this.processConfig(config, page);                                                         
                        } else {
                            this.totalItems = response.data.found;   
                            this.rows = this.data;                            
                        }                                         
                    }  else {
                        this.utilService.errorNotification();
                    }
                }
            );        
    }

    checkActiveItems(data) {
        this.checkedResourceIds = [];

        data.forEach((row) => {
            if (row.active) {
                this.checkedResourceIds.push(row.resourceId);
            }
        });

        console.log('this.checkedResourceIdsLog1', this.checkedResourceIds);    
    }

    onItemCheckboxChange(event) {
        let row = event.row;
        let isChecked = event.value; 

        if (this.checkedResourceIds.includes(row.resourceId)) {
            if (!isChecked) {
                let index = this.checkedResourceIds.indexOf(row.resourceId);
                if (index >= 0) {
                    this.checkedResourceIds.splice(index, 1);
                }                
            }
        } else {
            if (isChecked) {
                this.checkedResourceIds.push(row.resourceId);
            }
        }   

        console.log('this.checkedResourceIdsLog', this.checkedResourceIds);    
    }

    onSave(rolId: any) {
        console.log('onSaveLog', rolId, this.checkedResourceIds);
        if (rolId != '') {
            let data = {
                rolId: rolId,
                resources: this.checkedResourceIds
            }
            this.utilService.isLoading(true);
            this.aclService.create(data)
                .finally(() => this.utilService.isLoading(false))
                .subscribe(
                    (response) => {
                        if (response.success) {
                            this.utilService.successNotification();                                      
                        }  else {
                            this.utilService.errorNotification();
                        }
                    },
                    (error) => { console.log(error) }
                );
        }                
    }    
}
