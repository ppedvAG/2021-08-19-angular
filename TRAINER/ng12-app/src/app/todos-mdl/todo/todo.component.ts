import { Component, Input, OnInit } from '@angular/core';
import { Todo } from '../todos-table/todos-table.component';

@Component({
  selector: '[app-todo]',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  @Input()
  todo!: Todo;

/*   todo = {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: true
  } */

  giveClass() {
    if (this.todo.completed) {
      return 'done';
    } else {
      return '';
    }
  }

  /*
  <!-- Aufgabe:
Erstellen Sie eine Komponente, die die Inhalte von einem Todo-Objekt rendert.
Bereiten Sie eine Klasse 'done' vor. Wenn bei todo.completed true steht, dann wird die Klasse angewendet.

CSS-Klasse könnte aussehen
.done {
  text-decoration: line-through;
} --> */

  constructor() { }

  ngOnInit(): void {
  }

}
function Init() {
  throw new Error('Function not implemented.');
}

