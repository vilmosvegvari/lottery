import { Router, Routes } from '@angular/router';
import { map } from 'rxjs';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { selectActive } from './+state/user.selectors';

export const routes: Routes = [
  { path: 'login', loadComponent: () => import('./login/login.component') },
  {
    path: 'game',
    loadComponent: () => import('./game/game.component'),
    canActivate: [
      () => {
        const router = inject(Router);
        return inject(Store)
          .select(selectActive)
          .pipe(map((e) => (e !== null ? true : router.parseUrl('login'))));
      },
    ],
  },
  { path: '', pathMatch: 'full', redirectTo: 'login' },
];
