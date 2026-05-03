export interface ValidationMessages {
  required: (fieldName?: string) => string;
  invalid: (fieldName?: string) => string;
  minLength: (min: number) => string;
  maxLength: (max: number) => string;
  email: () => string;
  passwordWeak: () => string;
}
