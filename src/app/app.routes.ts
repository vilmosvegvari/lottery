import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login.component') },
  { path: 'game', loadComponent: () => import('./game/game.component') },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
