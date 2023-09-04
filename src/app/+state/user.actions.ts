import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { User } from './user.reducer';

export const UserActions = createActionGroup({
  source: 'User',
  events: {
    'Load Users': emptyProps(),
    'Set ActiveUser': props<{ user: User }>(),
  },
});
