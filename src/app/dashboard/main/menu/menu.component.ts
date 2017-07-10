import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import '../../../../assets/s/app-assets/vendors/js/ui/jquery.sticky.js';
// import '../../../../assets/s/app-assets/js/core/app-menu.js';

@Component({
    selector: 'core-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'
        // ,
        // '../../../../assets/s/app-assets/css/app.css'
        // '../../../../assets/s/app-assets/css/core/menu/menu-types/horizontal-menu.css'
    ],
    encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // this.initJqBootstrapValidation();        
    }

}

// (function() {
//     var script = document.createElement('script')
//     script.setAttribute("type", "text/javascript")
//     script.setAttribute("src", "assets/s/app-assets/js/core/app-menu.js")
//     document.getElementsByTagName("head")[0].appendChild(script);

//     var script = document.createElement('script')
//     script.setAttribute("type", "text/javascript")
//     script.setAttribute("src", "assets/s/app-assets/js/core/app.js")
//     document.getElementsByTagName("head")[0].appendChild(script);
// })();
