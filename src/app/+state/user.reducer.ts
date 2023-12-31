import { createReducer, on } from '@ngrx/store';
import { UserActions } from './user.actions';

export const userFeatureKey = 'user';

export interface User {
  userId: string;
  userName: string;
  password: string; // would not be plaintext
}

export interface UserDTO {
  userId: string;
  password: string;
}

export interface State {
  registeredUsers: User[];
  activeUser: User | null;
}

export const initialState: State = {
  registeredUsers: [
    {
      userId: 'test',
      userName: 'testName',
      password: 'test',
    },
    {
      userId: 'hello',
      userName: 'helloworld',
      password: 'world',
    },
    {
      userId: 'id',
      userName: 'name',
      password: 'pw',
    },
  ],
  activeUser: null,
};

export const userReducer = createReducer(
  initialState,
  on(UserActions.loadUsers, (state) => state),
  on(UserActions.setActiveUser, (state, { user }) => {
    return { ...state, activeUser: user };
  }),
);
