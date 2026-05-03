import { Injectable } from '@angular/core';
import { isRequiredError, VALIDATION_MESSAGES } from './validationMessage';
import { ValidationError } from '../models/ValidationError';

@Injectable({
  providedIn: 'root',
})
export class ValidationService {


 getErrorMessage(error?: ValidationError | null, fieldName?: string): string {
    if (!error) return '';

    switch (error.code) {

      case 'too_small':
        return isRequiredError(error)
          ? VALIDATION_MESSAGES.required(fieldName)
          : VALIDATION_MESSAGES.minLength(error.minimum);

      case 'invalid_type':
        return VALIDATION_MESSAGES.required(fieldName);

      case 'invalid_string':
      case 'invalid_enum_value':
        return VALIDATION_MESSAGES.invalid(fieldName);

      case 'custom':
        return error.message || VALIDATION_MESSAGES.invalid(fieldName);

      default:
        return VALIDATION_MESSAGES.invalid(fieldName);
    }
  }
}
