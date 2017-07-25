import { Component, OnInit } from '@angular/core';

import { LayoutService } from '../../service/layout.service';
import { AuthService } from '../../../service/auth.service';
import { UtilService } from '../../../common/service/util.service';

@Component({
    selector: 'core-nav',
    templateUrl: './nav.component.html',
    styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

    isLoading:boolean = false;
    authUser: any;
    showEditBar = false;

    constructor(
        private layoutService: LayoutService,
        private utilService: UtilService,
        private authService: AuthService
    ) { }

    ngOnInit() {
        // this.initEmitter();    
        console.log('authUserLog', this.authService.getAuthUser());
        this.authUser = this.authService.getAuthUser();   
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
