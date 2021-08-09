import { Component, OnInit } from '@angular/core';



//import { GoogleChartsModule, ChartType, Column} from 'angular-google-charts';
import { Result } from '../result';
import {InterviewserviceService} from '../interviewservice.service';
//import { ChartDataSets, ChartOptions } from 'chart.js';
//import { Color, Label } from 'ng2-charts';

//
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';



@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})

export class ResultComponent implements OnInit {

  public velu:any;
  
  constructor(private int:InterviewserviceService ) {
   }
/*
 lineChartData: ChartDataSets[];
 lineChartLabels: Label[];
 lineChartOptions: ChartOptions;
 lineChartColors: Color[];
 lineChartLegend:boolean;
 barChartType:any;
 lineChartPlugins:any;
 

  data: Data[];  
  Player = [];  
  Run = [];  
  Linechart = [];  
 */
  
pieChartOptions: ChartOptions;
pieChartLabels: Label[];
 pieChartData: SingleDataSet ;
 pieChartType: ChartType ;
 pieChartLegend:boolean ;
 pieChartPlugins = [];

  
pieChartOptionsdb: ChartOptions;
 pieChartLabeldb: Label[];
 pieChartDatadb: SingleDataSet ;
 pieChartTypedb: ChartType ;
 pieChartLegenddb:boolean ;
 pieChartPluginsdb = [];


  
pieChartOptionsunix: ChartOptions;
 pieChartLabelunix: Label[];
 pieChartDataunix: SingleDataSet ;
 pieChartTypeunix: ChartType ;
 pieChartLegendunix:boolean ;
 pieChartPluginsunix = [];


  
pieChartOptionsds: ChartOptions;
 pieChartLabelds: Label[];
 pieChartDatads: SingleDataSet ;
 pieChartTypeds: ChartType ;
 pieChartLegendds:boolean ;
 pieChartPluginsds = [];




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

//aptitude
this.pieChartOptions ={
    responsive: true,
  };
  this.pieChartOptionsdb ={
    responsive: true,
  };
   this.pieChartOptionsunix ={
    responsive: true,
  };
  this.pieChartOptionsds ={
    responsive: true,
  };
    
        this.pieChartLabels = ['Aptitude Success Percentage','% Improvement needed '];
        this.pieChartData = [this.velu[0],(100-this.velu[0])];
        this.pieChartType= 'pie';
        this.pieChartLegend = true;
        this.pieChartPlugins = [];


//db 

    
        this.pieChartLabeldb = ['Database Passing Percentage','% Improvement needed'];
        this.pieChartDatadb = [this.velu[2],(100-this.velu[2])];
        this.pieChartTypedb= 'pie';
        this.pieChartLegenddb = true;
        this.pieChartPluginsdb = [];


//unix
 

    
        this.pieChartLabelunix = ['Unix Passing Percentage','% Improvement needed'];
        this.pieChartDataunix = [this.velu[4],(100-this.velu[4])];
        this.pieChartTypeunix= 'pie';
        this.pieChartLegendunix = true;
        this.pieChartPluginsunix = [];


//Datastructures
 

    
        this.pieChartLabelds = ['Datastructures Passing Percentage','% Improvement needed'];
        this.pieChartDatads = [this.velu[6],(100-this.velu[6])];
        this.pieChartTypeds= 'pie';
        this.pieChartLegendds = true;
        this.pieChartPluginsds = [];

  

    });




    

    

  

    

      
  }
}


    
  
    
  // Array of different segments in chart
 

  //Labels shown on the x-axis
  
 




    
      
  
