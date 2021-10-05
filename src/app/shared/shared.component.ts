import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  templateUrl: './header/header.component.html',

})
export class SharedComponent implements OnInit {
  isShown = false;

  constructor() { }

  ngOnInit(): void {
  }

}
