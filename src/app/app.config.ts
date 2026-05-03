import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeuix/themes/aura';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authenticationInterceptor } from './core/interceptors/authentication-interceptor';
import { MessageService } from 'primeng/api';

export const appConfig: ApplicationConfig = {
  providers: [
     provideHttpClient(
      withFetch(),
      withInterceptors([authenticationInterceptor])
    ),
    MessageService,
      providePrimeNG({
            theme: {
                preset: Aura
            }
        }),
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes), provideClientHydration(withEventReplay())
  ]
};
