import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverviewTodosComponent } from './overview-todos/overview-todos.component';
import { TodoComponent } from './todo/todo.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { TodosTableComponent } from './todos-table/todos-table.component';
import { PwConfirmComponent } from './pw-confirm/pw-confirm.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    OverviewTodosComponent,
    TodoComponent,
    DateTimeComponent,
    TodosTableComponent,
    PwConfirmComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  exports: [
    OverviewTodosComponent
  ]
})
export class TodosModule { }
