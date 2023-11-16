import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { TeacherI } from "../../../interfaces/teacher/teacher.interface"
import { SubjectI } from "../../../interfaces/subjects/subjects.interface"

export interface TeacherStateI {
    result?: TeacherI[] | null
    subjects?: SubjectI[] | null
}

const teacherState: TeacherStateI = {
    result: null,
    subjects: null
}
export const teacherSlice = createSlice({
    name: 'teacher',
    initialState: teacherState,
    reducers: {
        setTeacherState: (state: TeacherStateI, action: PayloadAction<TeacherStateI>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { setTeacherState } = teacherSlice.actions

export default teacherSlice.reducer