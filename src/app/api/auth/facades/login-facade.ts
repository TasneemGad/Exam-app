import { inject, Injectable, signal } from '@angular/core';
import { Authentication } from '../authentication';
import { Router } from '@angular/router';
import { TokensService } from '../tokens-service';

@Injectable({
  providedIn: 'root',
})
export class LoginFacade {
  private auth = inject(Authentication);
  private tokenService = inject(TokensService);
  private router = inject(Router);

  loading = signal(false);

  login(credentials: Login) {
    this.loading.set(true);
    this.auth.login(credentials).subscribe({
      next: (response) => this.handleLoginSuccess(response),
      error: (err) => this.handleLoginError(err)
    });
  }

  private handleLoginSuccess(response: AuthResponse) {
    this.loading.set(false);
    if (response.payload.token) {
      this.tokenService.setToken(response.payload.token);
      this.router.navigate(['/diploma']);
    }
  }

  private handleLoginError(err: unknown) {
    this.loading.set(false);
    console.error('Login failed', err);
  }
}
