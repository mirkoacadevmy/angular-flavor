import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'details',
    loadComponent: () => import('./pages/details-page/details-page.component'),
  },
  {
    path: '**',
    redirectTo: 'details',
  },
];
