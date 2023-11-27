import { PayloadAction, createSlice } from '@reduxjs/toolkit'

export interface AuthStateI {
    isLoading?: boolean
    isLoadingLogout?: boolean
}

const authState: AuthStateI = {
    isLoading: false,
    isLoadingLogout: false
}

export const authSlice = createSlice({
    name: 'auth',
    initialState: authState,
    reducers: {
        setAuthState: (state: AuthStateI, action: PayloadAction<AuthStateI>) => {
            return {
                ...state,
                ...action.payload
            }
        }
    },
})

export const { setAuthState } = authSlice.actions

export default authSlice.reducer