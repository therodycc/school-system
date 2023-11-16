import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/root-reducer';

const teacherState = (state: AppState) => state.teacher;

const getAllTeachers = createSelector(teacherState, state => state.result);
const subjects = createSelector(teacherState, state => state.subjects);

export const teacherSelector = {
    getAllTeachers,
    subjects
};
