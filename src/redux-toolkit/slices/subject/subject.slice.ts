import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { SubjectI } from "../../../interfaces/subjects/subjects.interface"

export interface SubjectStateI {
    result: SubjectI[] | null
}

const subjectState: SubjectStateI = {
    result: null,
}
export const subjectSlice = createSlice({
    name: 'subject',
    initialState: subjectState,
    reducers: {
        setSubjectState: (state: SubjectStateI, action: PayloadAction<SubjectStateI>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { setSubjectState } = subjectSlice.actions

export default subjectSlice.reducer