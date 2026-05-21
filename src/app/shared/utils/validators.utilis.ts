import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';
import { isAfterDate } from './dates.utils';

export const dateBefore = (): ValidatorFn => {
  return (control: AbstractControl<Date>) => {
    if (!control.value) {
      return null;
    } else if (isAfterDate(control.value, new Date())) {
      return {
        dateBefore: 'La date ne peut être posterieur à la date actuelle.',
      };
    }
    return null;
  };
};
