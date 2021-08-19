import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewTodosComponent } from './overview-todos/overview-todos.component';
import { TodoComponent } from './todo/todo.component';



@NgModule({
  declarations: [
    OverviewTodosComponent,
    TodoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewTodosComponent
  ]
})
export class TodosModule { }
