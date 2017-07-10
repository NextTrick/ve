import { ViewChild, ElementRef, AfterViewInit, Component } from '@angular/core';

// declare var jQuery: any;

@Component({
    selector: 'my-datepicker',
    //   template: `<input #input type="text">`,
    templateUrl: './date-picker.component.html',
})
export class DatePickerComponent implements AfterViewInit {
    @ViewChild('input') input: ElementRef;

    ngAfterViewInit() {
        jQuery(this.input.nativeElement).datepicker();

        $('.pickadate-dropdown').pickadate({
            selectMonths: true,
            selectYears: true
        });

        $('#projectinput1').datetimepicker();

    }
}
