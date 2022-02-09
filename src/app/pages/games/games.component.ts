import { Component, OnInit } from '@angular/core';
import {DATA} from '../../mock-data'
import {Data} from '../../Data'
@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {
  data: Data[]=DATA
  constructor() { }

  ngOnInit(): void {
  }

}
