import { Component, OnInit, Output } from '@angular/core';

import { EventEmitter } from 'stream';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  message: string = "Hi from ChildComponent!!";
  
  constructor() { }
  ngOnInit(): void {
  }


}
