import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pw-confirm',
  templateUrl: './pw-confirm.component.html',
  styles: [
  ]
})
export class PwConfirmComponent implements OnInit {

  inp1!: string;
  inp2!: string;

  constructor() { }

  ngOnInit(): void {
  }
  handleInput(ev: Event) {

  }

}
