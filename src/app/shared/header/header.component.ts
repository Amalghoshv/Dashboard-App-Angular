import { outputAst } from '@angular/compiler';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  //child to parent
  @Output() isToggle = new EventEmitter()
  isOpen:boolean=true
  constructor(){}

  ngOnInit(): void {
    
  }
  toggle(){
    this.isOpen=!this.isOpen
    this.isToggle.emit(this.isOpen)
    
  }

}
