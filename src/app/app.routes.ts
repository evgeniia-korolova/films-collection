import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  // {
  //     path: '',
  //     pathMatch: 'full',
  //     redirectTo: 'layout',
  //   },
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/film-catalog/components/film-list/film-list'),
      },
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found'),
  },
];
