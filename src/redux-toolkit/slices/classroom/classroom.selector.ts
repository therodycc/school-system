import { createSelector } from '@reduxjs/toolkit';
import { AppState } from '../../store/root-reducer';

const classroomState = (state: AppState) => state.classroom;

const getAllClassroom = createSelector(classroomState, state => state.result);

export const classroomSelector = {
    getAllClassroom
};
