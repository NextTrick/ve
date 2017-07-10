import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
    selector: 'google-chart',
    templateUrl: './google-chart.component.html'
})
export class GoogleChartComponent implements OnInit {
    
    private static googleLoaded: any;

    constructor() {
        console.log("Here is GoogleChartComponent")
    }

    getGoogle() {
        return google;
    }

    ngOnInit() {
        console.log('ngOnInit');
        if (!GoogleChartComponent.googleLoaded) {
            GoogleChartComponent.googleLoaded = true;
            google.charts.load('current', { packages: ['corechart'], 'language': 'es' });
        }
        google.charts.setOnLoadCallback(() => this.drawGraph());
    }

    drawGraph() {
        console.log("DrawGraph base class!!!! ");
    }

    createBarChart(element: any): any {
        return new google.visualization.BarChart(element);
    }

    createColumnChart(element: any): any {
        return new google.visualization.ColumnChart(element);
    }

    createPieChart(element: any): any {
        return new google.visualization.PieChart(element);
    }

    createDataTable(array: any[]): any {
        return google.visualization.arrayToDataTable(array);
    }

    getDataTable() {
        return new google.visualization.DataTable();
    }

    ngAfterViewInit() {
        var _this = this;   
        $(window).on("throttledresize", function(event) {            
            _this.drawGraph();
        });
    }
}