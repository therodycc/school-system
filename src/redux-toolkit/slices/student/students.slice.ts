import { createSlice } from '@reduxjs/toolkit'
import { StudentI } from "../../../interfaces/student/student.interface"

export interface StudentStateI {
    result: StudentI[] | null
}

const studentState: StudentStateI = {
    result: null,
}
export const studentSlice = createSlice({
    name: 'students',
    initialState: studentState,
    reducers: {

    },
})

export default studentSlice.reducer