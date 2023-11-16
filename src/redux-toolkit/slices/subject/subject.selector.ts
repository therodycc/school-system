import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/root-reducer';

const subjectState = (state: AppState) => state.subject;

const getAllSubject = createSelector(subjectState, state => state.result);

export const subjectSelector = {
    getAllSubject
};
