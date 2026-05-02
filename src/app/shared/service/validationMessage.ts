import { ValidationError } from "../models/ValidationError";
import { ValidationMessages } from "../models/ValidationMessages";

export const VALIDATION_MESSAGES: ValidationMessages = {
  required: () => 'This field is required',

  minLength: (min: number) =>
    `Minimum ${min} characters`,

  maxLength: (max: number) =>
    `Maximum ${max} characters`,

  invalid: () => 'Invalid value',

  email: () => 'Invalid email format',

  passwordWeak: () => 'Password is too weak',
};

export const isRequiredError = (error: ValidationError): boolean =>
  error.code === 'too_small' && error.minimum === 1;

export const isMinLengthError = (error: ValidationError): boolean =>
  error.code === 'too_small' && error.minimum > 1;
