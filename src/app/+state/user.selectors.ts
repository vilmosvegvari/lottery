import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, UserDTO, userFeatureKey } from './user.reducer';

const selectFeature = createFeatureSelector<State>(userFeatureKey);
export const selectRegistered = createSelector(
  selectFeature,
  (state: State) => state.registeredUsers,
);

export const selectActive = createSelector(
  selectFeature,
  (state: State) => state.activeUser,
);

export const selectUserFromRegistered = (user: UserDTO) =>
  createSelector(selectFeature, (state: State) =>
    state.registeredUsers.find(
      (registered) => registered.userId === user.userId,
    ),
  );
