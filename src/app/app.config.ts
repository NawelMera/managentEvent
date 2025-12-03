import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { Configuration } from 'core/services';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
    ,{
      provide: Configuration,
      useFactory: () => new Configuration({
        basePath: 'http://localhost:3001'
      })
    },
    provideHttpClient()
  ],
};
