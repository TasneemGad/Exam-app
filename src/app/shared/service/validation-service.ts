import { Injectable } from '@angular/core';
import { isRequiredError, VALIDATION_MESSAGES } from './validationMessage';
import { ValidationError } from '../models/ValidationError';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {


  getErrorMessage(error?: ValidationError | null): string {
    if (!error) return '';

    switch (error.code) {

      case 'too_small':
        return isRequiredError(error)
          ? VALIDATION_MESSAGES.required()
          : VALIDATION_MESSAGES.minLength(error.minimum);

      case 'invalid_type':
        return VALIDATION_MESSAGES.required();
      case 'invalid_string':
      case 'invalid_enum_value':
        return VALIDATION_MESSAGES.invalid();


      case 'custom':
        return error.message || VALIDATION_MESSAGES.invalid();

      default:
        return VALIDATION_MESSAGES.invalid();
    }
  }
}
