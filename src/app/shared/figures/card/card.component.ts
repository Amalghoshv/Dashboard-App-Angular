import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  Highcharts=Highcharts
  chartOptions={}

  constructor(){

  }
  ngOnInit(): void {
    this.chartOptions={
      chart: {
        type: 'line'
    },
    title: {
        text: ''
    },
    subtitle: {
        text: ''
    },
    xAxis: {
        labels:{
          enabled:false
        }
      }, 
    yAxis: {
      labels:{
        enabled:false
      }
        
    },
    credits:{
      enabled:false
  },
  exporting:{
    enabled:false
  },
    plotOptions: {
        line: {
            dataLabels: {
                enabled: false
            },
            enableMouseTracking: false
        }
    },
    series: [{
        name: 'Reggane',
        data: [16.0, 18.2, 23.1, 27.9, 32.2, 36.4, 39.8, 38.4, 35.5, 29.2,
            22.0, 17.8]
    }, {
        name: 'Tallinn',
        data: [-2.9, -3.6, -0.6, 4.8, 10.2, 14.5, 17.6, 16.5, 12.0, 6.5,
            2.0, -0.9]
    }]
}
//resizing the figure to screens
setTimeout(()=>{
  window.dispatchEvent(
    new Event('resize')
  )
},300);

    }
    
  

}
