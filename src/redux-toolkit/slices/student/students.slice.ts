import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { StudentI } from "../../../interfaces/student/student.interface"

export interface StudentStateI {
    result: StudentI[] | null
}

const studentState: StudentStateI = {
    result: null,
}
export const studentSlice = createSlice({
    name: 'student',
    initialState: studentState,
    reducers: {
        setStudentState: (state: StudentStateI, action: PayloadAction<StudentStateI>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { setStudentState } = studentSlice.actions

export default studentSlice.reducer