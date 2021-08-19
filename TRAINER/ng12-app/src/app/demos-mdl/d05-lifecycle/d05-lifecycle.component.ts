import { Component, Input, OnChanges, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-d05-lifecycle',
  templateUrl: './d05-lifecycle.component.html',
  styleUrls: ['./d05-lifecycle.component.css']
})
export class D05LifecycleComponent implements OnInit, OnDestroy, OnChanges {

  @Input()
  inputProp!: string;

  constructor() {
    console.log('constructor');
    // auf die Props aus dem Dekorator kann man hier in der Definition nicht zugreifen
    // console.log('this.selector :>> ', this.selector);
  }

  ngOnChanges() {
    // wird aufgerufen, z.B. beim Befüllen von input-Variablen
    console.log('ngOnChanges');
  }

  ngOnInit(): void {
    console.log('ngOnInit');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy');
  }

}
