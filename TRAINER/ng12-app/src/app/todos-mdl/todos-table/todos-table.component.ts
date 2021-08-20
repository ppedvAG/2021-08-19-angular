import { Component, OnInit } from '@angular/core';

export interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

@Component({
  selector: 'app-todos-table',
  templateUrl: './todos-table.component.html',
  styleUrls: ['./todos-table.component.css']
})
export class TodosTableComponent implements OnInit {
  todos: Todo[] = [];
  showAll: boolean = true;

  constructor() { }

  ngOnInit(): void {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => this.todos = json)
  }

}
