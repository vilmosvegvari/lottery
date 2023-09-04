import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { User } from '../+state/user.reducer';
import { selectRegistered } from '../+state/user.selectors';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  constructor(private store: Store) {}

  get userList(): Observable<User[]> {
    return this.store.select(selectRegistered);
  }
}
