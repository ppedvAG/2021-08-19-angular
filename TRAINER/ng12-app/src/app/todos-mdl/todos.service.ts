import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor(private httpClient: HttpClient) { }

  getTodosObservable() {
    return this.httpClient.get('https://jsonplaceholder.typicode.com/todos/')
    .pipe(
      catchError(this.errorCallback('getting todos ', []))
    )
  }

  errorCallback<T>(operation = 'operation', result: T): any {
    return (error: any) => {
      console.log('error :>> ', error);
      console.log('error.message :>> ', error.message);
      console.log('operation :>> ', operation);
      return of(result as T);
    }
  }

  // Methoden können nicht nur irgendwas liefern sondern auch mit Argumenten von draußen arbeiten
  showInfo(info: string) {
    console.log('info :>> ', info);

  }




}
