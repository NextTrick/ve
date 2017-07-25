import { ViewChild, ElementRef, AfterViewInit, Component, OnInit } from '@angular/core';

// declare var jQuery: any;

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.css']
})
export class NotFoundComponent implements OnInit {
    @ViewChild('input') input: ElementRef;
     
    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {
        // jQuery(this.input.nativeElement).datepicker();
    }

}
