import { Component, OnInit } from '@angular/core';

declare var navBtn: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  

  constructor() { }

  ngOnInit(): void {
    
  }
 navBtn1(){
   navBtn();
 }
}
