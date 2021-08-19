import { Component, OnInit } from '@angular/core';
import { DateTimeComponent } from '../date-time/date-time.component';

@Component({
  selector: 'app-overview-todos',
  templateUrl: './overview-todos.component.html',
  styleUrls: ['./overview-todos.component.css']
})
export class OverviewTodosComponent implements OnInit {

  // myDateTime: any;

  constructor() { }

  ngOnInit(): void {
    // this.myDateTime = new DateTimeComponent();
  }

/*   destroyDateTime() {
    this.myDateTime = undefined;
  } */

}
