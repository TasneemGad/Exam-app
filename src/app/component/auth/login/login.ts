import { ChangeDetectionStrategy, Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { string, object } from "zod";

import { form, validateStandardSchema, FormField } from "@angular/forms/signals";
import { ErrorMessage } from "../../../shared/forms/error-message/error-message";
import { createFormState, markAllTouched } from '../../../shared/forms/form-state';
import { LoginFacade } from '../../../api/auth/facades/login-facade';
@Component({
  selector: 'app-login',
  imports: [CommonModule, FormField, ErrorMessage],
  templateUrl: './login.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoginComponent {
  private facade = inject(LoginFacade);

  loginModel = signal<Login>({
    username: '',
    password: '',
  });

  loginSchema = object({
    username: string().trim().min(1, "Username is required"),
    password: string().min(8, "Password must be at least 8 chars"),
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
    this.formState.submit();
    const value = this.loginForm();
    if (value.invalid()) markAllTouched(value);
    else this.facade.login(value.value());
  }

}
