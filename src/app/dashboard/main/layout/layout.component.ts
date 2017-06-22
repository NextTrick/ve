import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.updateBodyClass();
    }

    updateBodyClass() {
        let body = document.getElementsByTagName('body')[0];
        body.setAttribute("data-col", "2-column");
        body.classList.remove("1-column", "blank-page");
        body.classList.add("2-columns", 'fixed-navbar');        
    }

}
