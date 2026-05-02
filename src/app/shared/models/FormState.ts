import { Signal, WritableSignal } from "@angular/core";

export interface FormState<T> {
  form: T;
  submitted: WritableSignal<boolean>;
  submit(): void;
  reset(): void;
}
