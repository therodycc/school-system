import type { PayloadAction } from '@reduxjs/toolkit'
import { createSlice } from '@reduxjs/toolkit'
import { StudentI } from '../../interfaces/student/student.interface'

export interface DebtsStateI {
    result: StudentI[] | null
}

const debtsState: DebtsStateI = {
    result: null,
}

export const debtsSlice = createSlice({
    name: 'debts',
    initialState: debtsState,
    reducers: {
        addDebts: (state: DebtsStateI, action: PayloadAction<{ result: StudentI[] }>) => {
            state.result = action.payload.result
        },
        addNewDebt: (state: DebtsStateI, action: PayloadAction<{ debt: StudentI }>) => {
            state.result && (state.result = [action.payload.debt, ...state.result])
        },
        updateDebt: (state: DebtsStateI, action: PayloadAction<{ debt: StudentI }>) => {
            state.result && (state.result = state.result.map((item: StudentI) =>
                item.uuid == action.payload.debt.uuid ? {
                    ...item,
                    ...action.payload.debt
                } : item))
        },
        removeDebt: (state: DebtsStateI, action: PayloadAction<{ uuid: string }>) => {
            state.result && (state.result = state.result.filter((item: StudentI) => item.uuid != action.payload.uuid))
        }
    },
})

export const { addDebts, addNewDebt, updateDebt, removeDebt } = debtsSlice.actions

export default debtsSlice.reducer