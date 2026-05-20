import { Pipe, PipeTransform } from '@angular/core';
import { formatDatewithSlash, isDateValid } from '../utils/dates.utils';

@Pipe({
  name: 'valueToString',
})
export class ValueToStringPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): string {
    if ([undefined, null].includes(value)) {
      return null;
    }
    console.log(value);
    if (value === 'M') {
      return 'Masculin';
    } else if (value === 'F') {
      return 'Feminin';
    } else if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'number') {
      return `${value}`;
    } else if (typeof value === 'boolean') {
      return value ? 'Oui' : 'Non';
    } else {
      return value as string;
    }
  }
}
