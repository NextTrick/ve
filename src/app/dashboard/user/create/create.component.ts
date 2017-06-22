import { Component, OnInit, OnDestroy } from '@angular/core';

import { LayoutService } from '../../service/layout.service';

@Component({
    selector: 'user-create',
    templateUrl: './create.component.html',
    styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit, OnDestroy {

    isLoading: boolean = false;        

    constructor(private layoutService: LayoutService) {

    }

    ngOnInit() {
        this.layoutService.showEditBar(true);
    }

    toggleLoading() {
        this.isLoading = !this.isLoading;
    }

    ngOnDestroy() {        
        this.layoutService.showEditBar(false);
    }
}
