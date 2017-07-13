import { Component, ViewChild, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

//services
import { ScriptService } from '../../../common/service/script.service';

// import '../../../../assets/s/app-assets/vendors/js/pickers/pickadate/picker.js';
// import '../../../../assets/s/app-assets/vendors/js/pickers/pickadate/picker.date.js';
// import '../../../../assets/s/app-assets/vendors/js/pickers/pickadate/picker.time.js';
// import '../../../../assets/s/app-assets/vendors/js/pickers/pickadate/legacy.js';

// import '../../../../assets/s/app-assets/vendors/js/ui/jquery-ui.min.js';
// import '../../../../assets/s/app-assets/vendors/js/charts/echarts/echarts.js';

@Component({
    selector: 'core-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css',
        '../../../../assets/s/app-assets/vendors/css/pickers/datetime/bootstrap-datetimepicker.css',
        '../../../../assets/s/app-assets/vendors/css/pickers/pickadate/pickadate.css',
        '../../../../assets/s/app-assets/vendors/css/ui/jquery-ui.min.css'],
    encapsulation: ViewEncapsulation.None
})
export class HomeComponent implements OnInit {

    public minDate: Date = new Date();

    @ViewChild('myinput') myinput: ElementRef;

    constructor(
        private scriptService: ScriptService,
        private elRef: ElementRef        
    ) { }

    ngOnInit() {        
    }

    ngAfterViewInit() {
        // this.scriptService
        //     .load(   
        //         'dashboard-ecommerce.js'            
        //     ); 

        $(this.elRef.nativeElement).find("input[name='fromDate']").datepicker({
            dateFormat: "dd-mm-yy"
        });

        $(this.elRef.nativeElement).find("input[name='toDate']").datepicker({
            dateFormat: "dd-mm-yy"
        });
    }

    ngOnDestroy() {        
    }
}
