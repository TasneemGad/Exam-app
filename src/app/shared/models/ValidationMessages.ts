export type ValidationMessages = {
  required: () => string;
  minLength: (min: number) => string;
  maxLength: (max: number) => string;
  invalid: () => string;
  email: () => string;
  passwordWeak: () => string;
};
