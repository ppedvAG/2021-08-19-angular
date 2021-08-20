import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-d13-pipes',
  templateUrl: './d13-pipes.component.html',
  styleUrls: ['./d13-pipes.component.css']
})
export class D13PipesComponent implements OnInit {
  datum: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
