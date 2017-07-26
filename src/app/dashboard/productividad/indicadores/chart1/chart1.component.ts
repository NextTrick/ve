import { Component, OnInit } from '@angular/core';

import { GoogleChartComponent } from '../../../../common/component/google-chart/google-chart.component'

@Component({
    selector: 'home-chart1',
    templateUrl: './chart1.component.html',
    styleUrls: ['./chart1.component.css']
})
export class Chart1Component extends GoogleChartComponent implements OnInit {
    private options;
    private data;
    private chart;

    ngOnInit() {
        super.ngOnInit();
    }

    drawGraph() {
        console.log("DrawGraph Evolution...");
        this.data = this.createDataTable([
            ['Evolution', 'Imports', 'Exports', 'ExAndInp'],
            ['A', 8695000, 6422800, 3422800],
            ['B', 3792000, 3694000, 5422800],
            ['C', 8175000, 800800, 5422800],
            ['D', 2175000, 100800, 6422800],
            ['E', 4175000, 700800, 2422800]
        ]);

        this.options = {
            backgroundColor: '#f3f5f6',
            title: 'Evolution, 2014',
            // colors: palette('tol', 2).map(function(hex) {
            //         return '#' + hex;
            //     }),
            colors: ['#657CD0', "#DA68A0", "#06C3C0", "#777B80", "#F75870", "#7C6D70", "#7C0850"],
            chartArea: { width: '50%' },
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            vAxis: {
                title: 'Members'
            }
        };

        this.chart = this.createColumnChart(document.getElementById('chart1'));
        this.chart.draw(this.data, this.options);
    }
}
