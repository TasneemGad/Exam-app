import { isPlatformBrowser } from '@angular/common';
import { inject, Injectable, PLATFORM_ID } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TokensService {
  private readonly TOKEN_KEY = 'token';
  private platformId = inject(PLATFORM_ID);



  getToken(): string | null {
    if (!isPlatformBrowser(this.platformId)) return null;
    return localStorage.getItem(this.TOKEN_KEY);
  }

  setToken(token: string): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.setItem(this.TOKEN_KEY, token);
  }

  removeToken(): void {
    if (!isPlatformBrowser(this.platformId)) return;
    localStorage.removeItem(this.TOKEN_KEY);
  }

  isLoggedIn(): boolean {
    return !!this.getToken();
  }
}
