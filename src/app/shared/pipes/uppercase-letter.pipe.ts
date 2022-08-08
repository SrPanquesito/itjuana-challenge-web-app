import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uppercaseLetter'
})
export class UppercaseLetterPipe implements PipeTransform {

  transform(value: string, arg: number | string): string {
    if (+arg === 0) return value.charAt(0).toUpperCase() + value.slice(1);

    const stringArray = [value.slice(0, +arg), value.slice(+arg)];
    return stringArray[0] + value.charAt(+arg).toUpperCase() + stringArray[1].slice(1)
  }

}
