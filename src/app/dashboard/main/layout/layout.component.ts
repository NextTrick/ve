import { Component, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

import { ScriptService } from '../../../common/service/script.service';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    constructor(
        private scriptService: ScriptService,
        private elRef: ElementRef,
    ) { }

    ngOnInit() {
                    
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
}
