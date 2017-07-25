import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

import { ScriptService } from '../../../common/service/script.service';
import { AclService } from '../../../service/acl.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    constructor(
        private scriptService: ScriptService,
        private aclService: AclService,
        private elRef: ElementRef,
    ) { }

    ngOnInit() {        
        this.updateBodyClass();
    }

    ngAfterViewInit() {
        this.scriptService
            .load(   
                // 'amcharts.js', 'amcharts.serial.js', 'amcharts.light.js',

                'app-menu.js', 'app.js'
                // , 'dashboard-ecommerce.js'            
            )
            .then(data => {
                console.log('script loaded ', data);
            })
            .catch(error => console.log(error));            
    }


    updateBodyClass() {
        let body = document.getElementsByTagName('body')[0];
        body.setAttribute("data-col", "2-column");
        body.classList.remove("1-column", "blank-page");
        body.classList.add("2-columns");        
    }
}
