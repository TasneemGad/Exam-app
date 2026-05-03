import { ValidationError } from "../models/ValidationError";
import { ValidationMessages } from "../models/ValidationMessages";

export const VALIDATION_MESSAGES: ValidationMessages = {
  required: (fieldName?: string) =>
    fieldName ? `${fieldName} is required` : 'This field is required',

  invalid: (fieldName?: string) =>
    fieldName ? `${fieldName} is incorrect` : 'Invalid value',

  minLength: (min: number) => `Minimum ${min} characters`,
  maxLength: (max: number) => `Maximum ${max} characters`,
  email: () => 'Invalid email format',
  passwordWeak: () => 'Password is too weak',
};

export const isRequiredError = (error: ValidationError): boolean =>
  error.code === 'too_small' && error.minimum === 1;

export const isMinLengthError = (error: ValidationError): boolean =>
  error.code === 'too_small' && error.minimum > 1;
