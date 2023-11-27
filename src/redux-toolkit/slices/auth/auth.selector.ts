import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/root-reducer';

const authState = (state: AppState) => state.auth;

const isLoading = createSelector(authState, state => state.isLoading);

export const authSelector = {
    isLoading,
};
