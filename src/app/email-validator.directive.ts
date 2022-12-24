import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, Validators } from '@angular/forms';

@Directive({
  selector: '[appEmailValidator]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting: EmailValidatorDirective,
      multi: true,
    },
  ],
})
export class EmailValidatorDirective implements Validator {

  constructor() {}

  validate(control: AbstractControl): ValidationErrors | null {
    const value = control.value as string;
    if(value.includes('test')) {
      return {
        invalidEmail: true
      }
    }
    return null;
  }
}
