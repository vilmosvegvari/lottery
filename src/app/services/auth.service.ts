import { Injectable } from '@angular/core';
import { User, UserDTO } from '../+state/user.reducer';
import { map, Observable, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { UserActions } from '../+state/user.actions';
import { selectUserFromRegistered } from '../+state/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private store: Store) {}

  checkUser(
    checkedUser: UserDTO,
  ): Observable<{ success: boolean; user: User }> {
    return this.store.select(selectUserFromRegistered(checkedUser)).pipe(
      map((registeredUser) => ({
        success: registeredUser?.password === checkedUser.password,
        user: registeredUser as User,
      })),
      tap(({ success, user }) => {
        if (success) {
          this.store.dispatch(UserActions.setActiveUser({ user }));
        }
      }),
    );
  }
}
