import { Component, inject, input, Input, signal } from '@angular/core';
import { ValidationService } from '../../service/validation-service';
import { ValidationError } from '../../models/ValidationError';
import { FieldState } from '@angular/forms/signals';

@Component({
  selector: 'app-error-message',
  imports: [],
  templateUrl: './error-message.html'
})
export class ErrorMessage {
  private validation = inject(ValidationService);
  @Input() field!: any;
  @Input() submitted = signal(false);
  fieldName = input.required<string>();

  get message(): string {
    const state = this.field;
    if (!state) return '';

    const touched = state.nodeState?.selfTouched?.();
    const submitted = this.submitted();
    const shouldShow = submitted || touched;

    if (!shouldShow) return '';

    const errors = state.validationState?.errors?.();
    if (!errors || errors.length === 0) return '';

    return this.validation.getErrorMessage(errors[0],  this.fieldName());
  }
}
