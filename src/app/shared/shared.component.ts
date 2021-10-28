import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shared',
  template: `<router-outlet></router-outlet>`,

})
export class SharedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
