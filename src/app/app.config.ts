import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';


import { routes } from './app.routes';
import { Configuration } from 'core/api';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes)
    ,{
      provide: Configuration,
      useFactory: () => new Configuration({
        basePath: 'http://127.0.0.1:4010/'
      })
    }
  ],
};
