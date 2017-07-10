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

    public chart: any;
    public timer: any;

    @ViewChild('myinput') myinput: ElementRef;

    constructor(
        private scriptService: ScriptService,
        private elRef: ElementRef,
        private AmCharts: AmChartsService
    ) { }

    ngOnInit() {
        // this.scriptService
        //     .load(   
        //         'amcharts.js', 'amcharts.serial.js', 'amcharts.light.js',                                      
        //     )
        //     .then(data => {
        //         console.log('script loaded ', data);
        //     })
        //     .catch(error => console.log(error)); 
            
        

        // this.AmCharts.updateChart(this.chart, () => {
        //     // Change whatever properties you want, add event listeners, etc.
        //     this.chart.dataProvider = [];

        //     this.chart.addListener("init", () => {
        //         // Do stuff after the chart is initialized
        //     });
        // });
    }

    ngAfterViewInit() {

        this.initAmChart(); 

        $(this.elRef.nativeElement).find("input[name='fromDate']").datepicker({
            dateFormat: "dd-mm-yy"
        });

        $(this.elRef.nativeElement).find("input[name='toDate']").datepicker({
            dateFormat: "dd-mm-yy"
        });
    }

    ngOnDestroy() {
        clearInterval(this.timer);
        this.AmCharts.destroyChart(this.chart);
    }

    makeRandomDataProvider() {
        var dataProvider = [];

        // Generate random data
        for (var year = 1950; year <= 2005; ++year) {
            dataProvider.push({
                year: "" + year,
                value: Math.floor(Math.random() * 100) - 50
            });
        }

        return dataProvider;
    }

    initAmChart() {
        // this.chart = this.AmCharts.makeChart("chartdiv",{
        //     "type"    : "pie",
        //     "titleField"  : "category",
        //     "valueField"  : "column-1",
        //     "responsive": {
        //         "enabled": true
        //     },
        //     "dataProvider"  : [
        //         {
        //         "category": "category 1",
        //         "column-1": 8
        //         },
        //         {
        //         "category": "category 2",
        //         "column-1": 6
        //         },
        //         {
        //         "category": "category 3",
        //         "column-1": 2
        //         }
        //     ]
        // });

        this.chart = this.AmCharts.makeChart("chartdiv", {
            "type": "pie",
            "startDuration": 0,
            "theme": "light",
            "marginLeft": 0,
            "addClassNames": true,
            "legend": {
                "position": "right",
                // "marginRight": 100,
                "autoMargins": true
            },
            "responsive": {
                "enabled": true
            },
            "innerRadius": "30%",
            "defs": {
                "filter": [{
                    "id": "shadow",
                    "width": "200%",
                    "height": "200%",
                    "feOffset": {
                        "result": "offOut",
                        "in": "SourceAlpha",
                        "dx": 0,
                        "dy": 0
                    },
                    "feGaussianBlur": {
                        "result": "blurOut",
                        "in": "offOut",
                        "stdDeviation": 5
                    },
                    "feBlend": {
                        "in": "SourceGraphic",
                        "in2": "blurOut",
                        "mode": "normal"
                    }
                }]
            },
            "dataProvider": [{
                "country": "Lithuania",
                "litres": 501.9
            }, {
                "country": "Czech Republic",
                "litres": 301.9
            }, {
                "country": "Ireland",
                "litres": 201.1
            }, {
                "country": "Germany",
                "litres": 165.8
            }, {
                "country": "Australia",
                "litres": 139.9
            }, {
                "country": "Austria",
                "litres": 128.3
            }, {
                "country": "UK",
                "litres": 99
            }, {
                "country": "Belgium",
                "litres": 60
            }, {
                "country": "The Netherlands",
                "litres": 50
            }],
            "valueField": "litres",
            "titleField": "country",
            "export": {
                "enabled": true
            }
        });
        
        // this.chart = this.AmCharts.makeChart("chartdiv", {
        //     "type": "serial",
        //     "theme": "light",
        //     "marginTop": 0,
        //     "marginRight": 15,
        //     "dataProvider": this.makeRandomDataProvider(),
        //     "valueAxes": [{
        //         "axisAlpha": 0,
        //         "position": "left"
        //     }],
        //     "graphs": [{
        //         "id": "g1",
        //         "balloonText": "[[category]]<br><b><span style='font-size:14px;'>[[value]]</span></b>",
        //         "bullet": "round",
        //         "bulletSize": 8,
        //         "lineColor": "#d1655d",
        //         "lineThickness": 2,
        //         "negativeLineColor": "#637bb6",
        //         "type": "smoothedLine",
        //         "valueField": "value"
        //     }],
        //     "chartScrollbar": {
        //         "graph": "g1",
        //         "gridAlpha": 0,
        //         "color": "#888888",
        //         "scrollbarHeight": 55,
        //         "backgroundAlpha": 0,
        //         "selectedBackgroundAlpha": 0.1,
        //         "selectedBackgroundColor": "#888888",
        //         "graphFillAlpha": 0,
        //         "autoGridCount": true,
        //         "selectedGraphFillAlpha": 0,
        //         "graphLineAlpha": 0.2,
        //         "graphLineColor": "#c2c2c2",
        //         "selectedGraphLineColor": "#888888",
        //         "selectedGraphLineAlpha": 1
        //     },
        //     "chartCursor": {
        //         "categoryBalloonDateFormat": "YYYY",
        //         "cursorAlpha": 0,
        //         "valueLineEnabled": true,
        //         "valueLineBalloonEnabled": true,
        //         "valueLineAlpha": 0.5,
        //         "fullWidth": true
        //     },
        //     "dataDateFormat": "YYYY",
        //     "categoryField": "year",
        //     "categoryAxis": {
        //         "minPeriod": "YYYY",
        //         "parseDates": true,
        //         "minorGridAlpha": 0.1,
        //         "minorGridEnabled": true
        //     },
        //     "export": {
        //         "enabled": true
        //     }
        // });

        // Updates the chart every 3 seconds
        // this.timer = setInterval(() => {
        //     // This must be called when making any changes to the chart
        //     this.AmCharts.updateChart(this.chart, () => {
        //         this.chart.dataProvider = this.makeRandomDataProvider();
        //     });
        // }, 3000);
    }
}
