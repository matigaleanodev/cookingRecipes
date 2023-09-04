import {
  ApplicationConfig,
  LOCALE_ID,
  importProvidersFrom,
} from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutes } from './app.routes';
import {
  PreloadAllModules,
  provideRouter,
  withComponentInputBinding,
  withInMemoryScrolling,
  withPreloading,
} from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localeEs);



export const appConfig: ApplicationConfig = {
  providers: [
    { provide: LOCALE_ID, useValue: 'es' },
    provideAnimations(),
    provideRouter(
      RootRoutes,
      withPreloading(PreloadAllModules),
      withInMemoryScrolling({
        scrollPositionRestoration: 'top',
        anchorScrolling: 'enabled',
      }),
      withComponentInputBinding()
    ),
    importProvidersFrom([HttpClientModule]),
  ],
};
