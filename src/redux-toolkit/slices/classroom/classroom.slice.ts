import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ClassroomI } from "../../../interfaces/classrooms/classrooms.interface"

export interface ClassroomStateI {
    result: ClassroomI[] | null
}

const classroomState: ClassroomStateI = {
    result: null,
}
export const classroomSlice = createSlice({
    name: 'classroom',
    initialState: classroomState,
    reducers: {
        setClassroomState: (state: ClassroomStateI, action: PayloadAction<ClassroomStateI>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { setClassroomState } = classroomSlice.actions

export default classroomSlice.reducer