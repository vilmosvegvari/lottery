import { createFeatureSelector, createSelector } from '@ngrx/store';
import { State, userFeatureKey } from './user.reducer';

const selectFeature = createFeatureSelector<State>(userFeatureKey);
export const selectRegistered = createSelector(
  selectFeature,
  (state: State) => state.registeredUsers,
);

export const selectActive = createSelector(
  selectFeature,
  (state: State) => state.activeUser,
);
