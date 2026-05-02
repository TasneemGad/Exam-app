import { signal } from "@angular/core";
import { FormState } from "../models/FormState";

export function createFormState<T>(form: T): FormState<T> {
  const submitted = signal(false);

  return {
    form,
    submitted,

    submit() {
      submitted.set(true);
    },

    reset() {
      submitted.set(false);
    },
  };
}

export function markAllTouched(form: any) {
  if (!form) return;

  const childrenMap = form.structure?.childrenMap?.();
  const byPropertyKey: Map<string, any> = childrenMap?.byPropertyKey;

  if (!byPropertyKey) return;

  byPropertyKey.forEach((control) => {
    const selfTouched = control.node?.nodeState?.selfTouched;
    if (typeof selfTouched === 'function') {
      selfTouched.set(true);
    }
  });
}
