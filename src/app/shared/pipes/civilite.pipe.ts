import { Pipe, PipeTransform } from '@angular/core';
import { CiviliteType, SexesTypes } from '../types/sexes.type';

@Pipe({
  name: 'civilite',
  standalone: true,
})
export class CivilitePipe implements PipeTransform {
  transform(value: SexesTypes): CiviliteType {
    return value === 'F' ? 'Mme' : 'Mr';
  }
}
