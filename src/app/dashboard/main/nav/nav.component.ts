import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../service/layout.service';
import { UtilService } from '../../../common/service/util.service';

@Component({
    selector: 'core-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    isLoading:boolean = false;
    
    showEditBar = false;

    constructor(
        private layoutService: LayoutService,
        private utilService: UtilService
    ) { }

    ngOnInit() {
        this.initEmitter();         
    }

    initEmitter() {

        this.layoutService.showEditBarEmitter.subscribe(
            (mode: boolean) => {
                if (mode) {
                    this.showEditBar = true;
                } else {
                    this.showEditBar = false;
                }
            }
        );

        this.utilService.isLoadingEmitter.subscribe(
            isLoading => {
                this.isLoading = isLoading;
            }
        );
    }

}
