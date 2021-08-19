import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.css']
})
export class DateTimeComponent implements OnInit, OnDestroy {

  datum: string = '';
  uhrzeit: string = '';
  intervalId: any;

  constructor() {
  }

  ngOnInit(): void {
    // setInterval(this.tick, 1000)
    this.intervalId = setInterval(() => {this.tick()}, 1000)
  }

  tick() {
    let date = new Date();
    this.datum = date.toLocaleDateString();
    this.uhrzeit = date.toLocaleTimeString();
  }

  ngOnDestroy() {
    clearInterval(this.intervalId);
  }

}
