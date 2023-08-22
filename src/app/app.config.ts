import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RootRoutes } from './app.routes';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';

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
  ],
};
