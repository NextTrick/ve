import { Component, OnInit } from '@angular/core';

import { GoogleChartComponent } from '../../../../common/component/google-chart/google-chart.component'

@Component({
  selector: 'detail-chart1',
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
        this.data = this.getDataTable();
        this.data.addColumn('number', 'Day');
        this.data.addColumn('number', 'El Comercio');
        this.data.addColumn('number', 'Gestión');
        this.data.addColumn('number', 'Trome');

        this.data.addRows([
            [1,  37.8, 80.8, 41.8],
            [2,  30.9, 69.5, 32.4],
            [3,  25.4,   57, 25.7],
            [4,  30.7, 18.8, 10.5],
            [5,  40.9, 17.6, 10.4],
            [6,   45.8, 13.6,  7.7],
            [7,   47.6, 12.3,  9.6],
            [8,  50.3, 29.2, 10.6],
            [9,  50.9, 42.9, 20.8],
            [10, 60.8, 30.9, 11.6],
            [11,  70.3,  7.9,  4.7],
            [12,  80.6,  8.4,  5.2],
            [13,  82.8,  6.3,  3.6],
            [14,  85.2,  6.2,  3.4]
        ]);

        this.options = {
            backgroundColor: '#f3f5f6',
            hAxis: {
                title: 'Time'
            },
            vAxis: {
                title: 'Popularity'
            },
            series: {
                1: { curveType: 'function' }
            },
            colors: ['#657CD0', "#DA68A0", "#06C3C0", "#777B80", "#F75870", "#7C6D70", "#7C0850"],
        };

        this.chart = this.createLineChart(document.getElementById('detail-chart1'));
        this.chart.draw(this.data, this.options);
    }    
}
