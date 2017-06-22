import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'auth-component',
    template: `<router-outlet></router-outlet>`
})
export class AuthComponent implements OnInit {

    constructor() { }

    ngOnInit() {
        this.updateBodyClass();
    }

    updateBodyClass() {
        let body = document.getElementsByTagName('body')[0];
        body.setAttribute("data-col", "1-column");
        body.classList.remove("2-columns", 'fixed-navbar');
        body.classList.add("1-column", "blank-page");
    }

}
