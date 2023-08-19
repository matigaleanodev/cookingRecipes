import { Routes } from '@angular/router';

export const RootRoutes: Routes = [
  {
    path: 'home',
    loadComponent: () =>
      import('src/app/components/home/home.component').then(
        (c) => c.HomeComponent
      ),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: '**',
    redirectTo: '/home',
    pathMatch: 'full',
  },
];
