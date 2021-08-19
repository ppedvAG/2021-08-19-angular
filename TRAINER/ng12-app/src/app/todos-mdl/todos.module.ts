import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewTodosComponent } from './overview-todos/overview-todos.component';
import { TodoComponent } from './todo/todo.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { TodosTableComponent } from './todos-table/todos-table.component';



@NgModule({
  declarations: [
    OverviewTodosComponent,
    TodoComponent,
    DateTimeComponent,
    TodosTableComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OverviewTodosComponent
  ]
})
export class TodosModule { }
