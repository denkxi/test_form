import { AbstractControl, ValidatorFn, ValidationErrors } from '@angular/forms';

export function commaNumbers(digitsAfterDecimal: number = 1): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;

    if(value === null) {
      return null;
    }
    
    // Number check
    if (isNaN(value) || value < 0) {
      return { invalidNumber: { value: control.value } };
    }

    // Check the number of digits after the decimal point
    const decimalIndex = value.toString().indexOf('.');
    if (decimalIndex !== -1 && value.length - decimalIndex - 1 > digitsAfterDecimal) {
      return { invalidDecimal: { value: control.value } };
    }

    return null;
  };
}