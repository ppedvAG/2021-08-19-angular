import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d04-component',
  templateUrl: './d04-component.component.html',
  styleUrls: ['./d04-component.component.css']
})
export class D04ComponentComponent
{
  public classProp = 'classPropValue';
  // ohne modifier sind Props public
  classProp1 = 'classPropValue';
  classProp2 = 7;

  classMethod1() {
    return 'return from classMethod1';
  }

  giveClass() {
    if(Math.random() > 0.5) {
      return 'blueBackground';
    } else {
      return '';
    }
  }
}
