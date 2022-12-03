import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.css']
})
export class DefaultComponent implements OnInit {
  toggle:boolean=true
  constructor(){ }
  ngOnInit(): void {
    
  }
  isToggle(event:any){
    this.toggle=event
     //resizing the figure to screens
     setTimeout(()=>{
      window.dispatchEvent(
        new Event('resize')
      )
    },300);
  }

}
