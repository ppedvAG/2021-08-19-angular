import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-d11-outputs',
  templateUrl: './d11-outputs.component.html',
  styles: [
  ]
})
export class D11OutputsComponent {
  startMessage: string = 'test';
  tickMessage: string = 'test';
  endMessage: string = 'test';

  handleStart() {
    this.startMessage = 'Timer gestartet';
  }

  handleTick(seconds: number) {
    this.tickMessage = `Geblieben: ${seconds}`;
  }

  handleEnd(msg: string) {
    this.endMessage = msg;
  }

}

@Component({
  selector: 'app-d11-outputs-child',
  templateUrl: './d11-outputs-child.component.html',
  styles: [
  ]
})
export class D11OutputsComponentChild {

  @Input()
  time: number = 10;
  @Output() start: EventEmitter<void> = new EventEmitter();
  @Output() tick: EventEmitter<number> = new EventEmitter();
  @Output() end: EventEmitter<string> = new EventEmitter();

  remainingTime: number = 0;

  intervalId: any;

  handleClick() {
    console.log('handleClick');
    this.start.emit();
    this.remainingTime = this.time;
    this.intervalId = setInterval(() => {
      this.remainingTime--;
      this.tick.emit(this.remainingTime);
      if (this.remainingTime == 0) {
        this.end.emit('Zeit ist abgelaufen');
        clearInterval(this.intervalId);
      }
    }, 1000)
  }


}
