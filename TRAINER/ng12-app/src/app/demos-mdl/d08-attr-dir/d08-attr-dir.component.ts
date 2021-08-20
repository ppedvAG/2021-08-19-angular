import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d08-attr-dir',
  templateUrl: './d08-attr-dir.component.html',
  styleUrls: ['./d08-attr-dir.component.css']
})
export class D08AttrDirComponent implements OnInit {

  zufallszahl!: number;
    // Option 2 mit ngClass
  diceClasses!: any;

  wuerfeln() {
    this.zufallszahl = Math.ceil(Math.random()*6);
    // Option2 mit ngClass:
    this.diceClasses = {
      'bingo': this.zufallszahl == 6
    }
  }

  getFontSize() {
    return this.zufallszahl * 10;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
