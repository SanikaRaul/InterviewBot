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

  velu:any;
  
  constructor(private int:IntService ) { }

  ngOnInit(): void {
    
    this.int
    .getResults()
    .subscribe((result) => {
      this.velu = result,
      //this.fr=this.Result;
      //JSON.stringify(this.Times);
      
      console.log(this.velu);})
    }
    
  

  // Array of different segments in chart
  lineChartData: ChartDataSets[] = [
    { data: [this.velu,20,20,20,20,20,20], label: 'Product A' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'Product B' }
  ];

  //Labels shown on the x-axis
  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  // Define chart options
  lineChartOptions: ChartOptions = {
    responsive: true
  };

  // Define colors of chart segments
  lineChartColors: Color[] = [

    { // dark grey
      backgroundColor: 'rgba(77,83,96,0.2)',
      borderColor: 'rgba(77,83,96,1)',
    },
    { // red
      backgroundColor: 'rgba(255,0,0,0.3)',
      borderColor: 'red',
    }
  ];

  // Set true to show legends
  lineChartLegend = true;

  // Define type of chart
  barChartType = 'bar';

  lineChartPlugins = [];

 



}
