import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { TokensService } from '../../api/auth/tokens-service';

export const authenticationInterceptor: HttpInterceptorFn = (req, next) => {
  const tokensService = inject(TokensService);
  const token = tokensService.getToken();

  if (!token) {
    return next(req);
  }

  const authReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`
    }
  });

  return next(authReq);
};
