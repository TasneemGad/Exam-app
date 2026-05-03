import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { string, object } from "zod";

import { form, validateStandardSchema, FormField } from "@angular/forms/signals";
import { ErrorMessage } from "../../../shared/forms/error-message/error-message";
import { createFormState, markAllTouched } from '../../../shared/forms/form-state';
import { LoginFacade } from '../../../api/auth/facades/login-facade';
import { ProgressSpinner } from 'primeng/progressspinner';

@Component({
  selector: 'app-login',
  imports: [CommonModule, FormField, ErrorMessage, ProgressSpinner],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  public facade = inject(LoginFacade);
  public isLoading = signal(false);

  loginModel = signal<Login>({
    username: '',
    password: ''
  });

  loginSchema = object({
    username: string().trim().min(2, "Username is required"),
    password: string().min(8, "Password must be at least 8 chars")
  });

  loginForm = form(this.loginModel,
    (path) => {
      validateStandardSchema(path, this.loginSchema);
    }
  );

  showPassword = signal(false);
  loading = signal(false);
  formState = createFormState(this.loginForm);

  togglePassword() {
    this.showPassword.update(v => !v);
  }

  onLogin() {
    const value = this.loginForm();
    this.isLoading.set(true);
    if (value.invalid()) {
      markAllTouched(value);
      this.formState.submit();
    } else {
      this.formState.submit();
      this.facade.login(value.value());
    }
  }

}
