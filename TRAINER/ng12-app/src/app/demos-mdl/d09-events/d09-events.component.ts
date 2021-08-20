import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d09-events',
  templateUrl: './d09-events.component.html',
  styleUrls: ['./d09-events.component.css']
})
export class D09EventsComponent implements OnInit {

  // Übung1
  isHome: boolean = false;
  home() {
    this.isHome = true;
  }
  away() {
    this.isHome = false;
  }


  // Übung2
  counter: number = 0;
  handleClick() {
    this.counter++;
  }

  // Bsp 3
  produceAlert() {
    alert('button clicked');
  }


  // Bsp 4
  eventTarget: any = 'show target';

  showEventObject(ev: any) {
    this.eventTarget = ev.target;
    console.log('eventTarget :>> ', this.eventTarget);
  }



  // Bsp 5
  size: number = +localStorage.getItem('size')!;
  changeSize(event: Event) {
    // Operator '+' wandelt string zu einer positiven Zahl
    this.size = +(event.target as HTMLInputElement).value;
    localStorage.setItem('size', (event.target as HTMLInputElement).value);
  }

  constructor() { }
  ngOnInit(): void {
  }
}
