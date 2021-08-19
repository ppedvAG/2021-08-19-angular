import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d07-struct-dir',
  templateUrl: './d07-struct-dir.component.html',
  styleUrls: ['./d07-struct-dir.component.css']
})
export class D07StructDirComponent implements OnInit {
  myArray = [
    'item1',
    'item2',
    'item3',
    'item4'
  ]

  constructor() { }

  ngOnInit(): void {
  }

  

}
