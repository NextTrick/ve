import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

//services
import { RolService } from '../../../../service/rol.service';
import { AclService } from '../../../../service/acl.service';
import { UtilService } from '../../../../common/service/util.service';

//components
import { NextNg2TableComponent, Filter } from '../../../../common/component/next-ng2-table/next-ng2-table.component';

@Component({
    selector: 'rol-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css']
})
export class ListComponent extends NextNg2TableComponent implements OnInit {
        
    public columns: Array<any> = [        
        {
            title: 'Nombre', name: 'name', sort: false,       
        },
        {
            title: 'Estado', name: 'statusAlias', sort: false,       
        },        
    ];

    constructor(
        private http: Http,
        private router: Router,
        private rolService: RolService,        
        private aclService: AclService,        
        protected utilService: UtilService,
    ) {               
        super(utilService, rolService);     
        
        this.config.action.edit.active = true;
        this.config.action.edit.uri = '/dashboard/acl/rol/';
        this.config.action.remove.active = true;
        this.config.oneLoad = true;
        this.itemsPerPage = 3;
        this.config.filtering.columnName = 'name';
    }

    ngOnInit() {
        super.ngOnInit();
    }

}
