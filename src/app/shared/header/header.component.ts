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
    this.onClick();
  }
 navBtn1(){
   navBtn();
 }
 
 onClick() {
   let sIcon: any = document.getElementById('searchIcon');
    let sInput:any = document.getElementById('searchInput');

    sIcon.addEventListener('click', () => {
    sInput.style.display='block';
  })

 
}
  




 
}
