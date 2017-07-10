import { Component, OnInit } from '@angular/core';

import { GoogleChartComponent } from '../../../../common/component/google-chart/google-chart.component'

@Component({
    selector: 'home-chart2',
    templateUrl: './chart2.component.html',
    styleUrls: ['./chart2.component.css']
})
export class Chart2Component extends GoogleChartComponent implements OnInit {
    private options;
    private data;
    private chart;

    ngOnInit() {
        super.ngOnInit();
    }

    drawGraph() {
        console.log("DrawGraph Evolution...");
        this.data = this.createDataTable([
            ['Evolution', 'Imports', 'Exports', 'ExAnd Expot'],
            ['El Comercio', 8695000, 6422800, 1422800],
            ['Gestión', 3792000, 3694000, 4422800],
            ['El peru del norte y del peru', 8175000, 800800, 5422800],
            ['Trome', 2792000, 2230800, 3343242],
            ['Ojo', 2792000, 2230800, 3343242],
            ['Chino', 2792000, 2230800, 3343242],
        ]);

        this.options = {
            title: 'Evolution, 2014',
            // titleTextStyle: {                                 
            //     fontSize: 19,                
            // },
            // backgroundColor: '#00cc00',
            // colors: palette('tol', 6).map(function(hex) {
            //         return '#' + hex;
            //     }),
            colors: ['#657CD0', "#DA68A0", "#06C3C0", "#777B80", "#F75870", "#7C6D70", "#7C0850"],
            // is3D: true,
            // pieSliceBorderColor:"transparent",            
            // colors: Please.make_color({
            //     colors_returned: 6, //set number of colors returned                
            // }),                  
            // slices: {0: {offset: 0.02}},
            // legend: {position: 'top', alignment: 'left', maxLines: 2},          
            legend: {position: 'right'}, 
            backgroundColor: {fill:'transparent'},         
            chartArea: {
                left:20,                
                width:'100%'
            },
            width: '100%',
            height: '100%',            
            hAxis: {
                title: 'Value in USD',
                minValue: 0
            },
            vAxis: {
                title: 'Members'
            }
        };

        this.chart = this.createPieChart(document.getElementById('chart2'));
        this.chart.draw(this.data, this.options);             
    }    
}
