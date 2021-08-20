import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'd13MyPipe'
})
export class D13MyPipePipe implements PipeTransform {

  // ... ist spread Operator
  transform(value: unknown, ...args: unknown[]): string {
    console.log('args :>> ', args);
    return `changed: ${value}`;
  }

}
