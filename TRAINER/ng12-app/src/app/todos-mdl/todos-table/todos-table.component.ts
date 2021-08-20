import { Component, OnInit } from '@angular/core';
import { TodosService } from '../todos.service';

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

  constructor(private todosService: TodosService) { }

  ngOnInit(): void {
/*     fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      // .then(json => console.log(json))
      .then(json => this.todos = json)
      .catch(err => console.log('err :>> ', err)) */
      this.todosService.getTodosObservable()
/*       .subscribe((response) => {
        this.todos = response.json();
      } */
      .subscribe(response => this.todos = response);


      this.todosService.showInfo('infos from table');
  }
}
