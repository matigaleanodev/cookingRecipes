import { ApplicationConfig, LOCALE_ID, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutes } from './app.routes';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import localeEsAr from '@angular/common/locales/es-AR';

registerLocaleData(localeEsAr, 'es-Ar');



export const appConfig: ApplicationConfig = {
  providers: [
    
    provideAnimations(),
    provideRouter(RootRoutes, 
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
      ),
    importProvidersFrom([
      HttpClientModule,
    ]),
    { provide: LOCALE_ID, useValue: 'es-Ar' }
  ],
};
