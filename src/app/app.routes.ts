import { Routes } from '@angular/router';
import { Layout } from './layout/layout/layout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        loadComponent: () => import('./features/film-catalog/components/film-list/film-list'),
      },
      {
        path: 'film/:id',
        loadComponent: () => import('./pages/film-details-page/film-details-page')          
      },
      {
        path: 'favorites',
        loadComponent: () => import('./pages/favorites-page/favorites-page')
      }
    ],
  },
  {
    path: '**',
    loadComponent: () => import('./pages/not-found/not-found'),
  },
];
