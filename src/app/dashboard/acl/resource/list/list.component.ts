import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Router } from '@angular/router';

//services
import { ResourceService } from '../../../../service/resource.service';
import { UtilService } from '../../../../common/service/util.service';

//components
import { NextNg2TableComponent, Filter } from '../../../../common/component/next-ng2-table/next-ng2-table.component';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent extends NextNg2TableComponent implements OnInit {

  public columns: Array<any> = [        
        {
            title: 'Nombre', name: 'name', sort: false,       
        },
        {
            title: 'Recurso', name: 'uri', sort: false,       
        },
        {
            title: 'Estado', name: 'statusAlias', sort: false,       
        },        
    ];

    constructor(
        private http: Http,
        private router: Router,
        protected resourceService: ResourceService,                
        protected utilService: UtilService,
    ) {               
        super(utilService, resourceService);        
        
        this.config.action.edit.active = true;
        this.config.action.edit.uri = '/dashboard/acl/resource/';
        this.config.action.remove.active = true;
    }

    ngOnInit() {
        super.ngOnInit();
    }
}
