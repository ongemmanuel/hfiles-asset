import { Injectable } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class CustomValidatorService {
  constructor() { }

  checkIfAvailableValidator(isAvailable: boolean) {
    return (control: AbstractControl) => {
        if (isAvailable) {
          return null;
        } else {
          return {idNotAvailable : true};
        }
    };
  }

  noWhiteSpaceValidator(control: AbstractControl) {
    const val = control.value;
    // console.log(val);
    if (val.length !== 0 && (val !== null || val !== undefined)) {
      // console.log(val);
      if (val.toString().trim() === '') {
        return { onlyWhiteSpace: true };
      } else if (val.toString().trim() !== '' && val.toString().charAt(0) === ' ') {
        return { onlyWhiteSpace: true };
      }
      return null;
    }
  }

  greaterThanZero(control: AbstractControl) {
    const val = control.value;
    if (val.length !== 0 && val !== null || val && undefined) {
      if (val.trim() > 0) {
        return null;
      } else {
        return { pattern: true };
      }
    }
  }

  mapErrorMsg(errorKeys: string[]) {
    // console.log(errorKeys);
    const errorMsg = {
      onlyWhiteSpace: 'Whitespace not allowed.',
      required: 'The field is required.',
      pattern: 'Value must only be a number greater than 0.',
      idNotAvailable: 'Company Id already exist.'
    };

    const errors = [];
    if (errorKeys !== null && errorKeys !== undefined && errorKeys !== []) {
      Object.keys(errorKeys).forEach(errorKey => {
        errors.push(errorMsg[errorKey]);
      });
      return errors.join(' ');
    }


  }

}
