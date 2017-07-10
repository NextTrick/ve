import { Component, ViewChild, OnInit, ElementRef, ViewEncapsulation } from '@angular/core';

//services
import { ScriptService } from '../../../common/service/script.service';

import { AmChartsService } from "@amcharts/amcharts3-angular";


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
        
    type = 'bar';   

    data = {
        labels: ["First", "Second", "Third", "Fourth", "Fifth", "Sixth"],
        datasets: [{
            label: 'Impresos',            
            data: [12, 100, 30, 50, 20, 3],
            backgroundColor: palette('tol', 1).map(function(hex) {
                    return '#' + hex;
                })[0],            
            borderWidth: 2
        },
        {
            label: 'Web',            
            data: [12, 4, 30, 50, 29, 3],
            backgroundColor: palette('tol', 2).map(function(hex) {
                    return '#' + hex;
                })[1],            
            borderWidth: 2
        }
        ]        
    };

    options = {        
        responsive: true,
        maintainAspectRatio: false,
        title: {
            display: true,
            text: 'Custom Chart Title'
        },        
        scales: {
            xAxes: [{
                gridLines: {
                    offsetGridLines: true
                }
            }],
            yAxes: [
                {                
                    display: true,
                    ticks: {
                        beginAtZero: true,
                        stepSize: 20,
                        steps:10,
                        stacked: true,
                        stepValue:10,
                        max:120
                    }
                    
                },
            ]
        }       
    };

    @ViewChild('myinput') myinput: ElementRef;

    constructor(
        private scriptService: ScriptService,
        private elRef: ElementRef,
        private AmCharts: AmChartsService
    ) { }

    ngOnInit() {        
    }

    ngAfterViewInit() {    

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
