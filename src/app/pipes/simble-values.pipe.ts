import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'simbleValue',
  standalone: false
})
export class SimbleValuesPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return '$' + value;
  }

}
