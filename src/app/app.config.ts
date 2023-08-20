import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutes } from './app.routes';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(RootRoutes, 
      withPreloading(PreloadAllModules),
      withComponentInputBinding()
      ),
    importProvidersFrom([
      HttpClientModule,
    ]),
  ],
};
