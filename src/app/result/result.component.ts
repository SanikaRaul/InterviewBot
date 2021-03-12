import { Component, OnInit } from '@angular/core';
import { GoogleChartsModule, ChartType, Column} from 'angular-google-charts';
import { Result } from '../result';
import { IntService } from '../int.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {

  public velu:any;
  
  constructor(private int:IntService ) { }

 lineChartData: ChartDataSets[];
 lineChartLabels: Label[];
 lineChartOptions: ChartOptions;
 lineChartColors: Color[];
 lineChartLegend:boolean;
 barChartType:any;
 lineChartPlugins:any;
 /*

  data: Data[];  
  Player = [];  
  Run = [];  
  Linechart = [];  
 */


  ngOnInit(): void {
    }



    clickFunction()

    {

      this.int
    .getResults()
    .subscribe((result) => {
      this.velu = result,
    console.log(this.velu);
      
    console.log("hi");


    this.lineChartData= [
      { data: [this.velu[0],this.velu[1],20,20,20,20,20], label: 'Interview Performance' }
    ];
    this.lineChartLabels= ['Aptitude','DS','shell','DS'];
  
    // Define chart options
    this.lineChartOptions = {
      responsive: true
    };
  
    // Define colors of chart segments
    this.lineChartColors = [
  
      { // red
        backgroundColor: 'rgba(250,0,0,0.3)',
        borderColor: 'red',
      }
    ];
  
    // Set true to show legends
    this.lineChartLegend = true;
  
    // Define type of chart
    this.barChartType = 'bar';
  
    this.lineChartPlugins = [];
  

    });




    

    

  

    

      
  }
}


    
 




    
      
  
