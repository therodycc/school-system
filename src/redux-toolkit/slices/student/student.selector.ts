import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/root-reducer';

const studentState = (state: AppState) => state.student;

const getAllStudents = createSelector(studentState, state => state.result);

export const studentSelector = {
    getAllStudents
};
