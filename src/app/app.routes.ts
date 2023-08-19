import { Routes } from '@angular/router';
import { RecipeDetailComponent } from './components/recipe-detail/recipe-detail.component';

export const RootRoutes: Routes = [
	{
    path: 'receta/:id',
		component: RecipeDetailComponent
    // loadComponent: () =>
    //   import('./components/recipe-detail/recipe-detail.component').then(
    //     (c) => c.RecipeDetailComponent
		// 		),
  },
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
