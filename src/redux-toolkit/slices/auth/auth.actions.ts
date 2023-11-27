import sweetAlert from "../../../helpers/alerts/sweetAlert.helper";
import { AuthLoginPayload } from "../../../interfaces/auth/auth.interface";
import authProvider from "../../../providers/auth/auth.provider";
import { setAuthState } from "./auth.slice";

function setCookie(name: string, val: string) {
    var d = new Date();
    d.setTime(d.getTime() + (60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var path = `;path=/`;
    var domain = `;domain=localhost:3001`;
    document.cookie = name + "=" + val + "; " + expires + path + domain;
}

export const signIn = (payload: AuthLoginPayload, successAction?: () => void) => {
    return async (dispatch: Function) => {
        dispatch(setAuthState({ isLoading: true }))
        const res = await authProvider.signIn(payload);

        if (!res || res?.error) return [
            sweetAlert.toast("Error", "Credenciales Invalidas", "error"),
            dispatch(setAuthState({
                isLoading: false
            }))
        ];

        // setCookie("x-access-token", res?.token)
        successAction?.()
        dispatch(setAuthState({
            isLoading: false
        }))
    }
}

export const logout = (successAction?: () => void) => {
    return async (dispatch: Function) => {
        dispatch(setAuthState({ isLoadingLogout: true }))
        const res = await authProvider.logout();

        if (!res || res?.error) return [
            sweetAlert.toast("Error", "", "error"),
            dispatch(setAuthState({
                isLoadingLogout: false
            }))
        ];

        successAction?.()
        dispatch(setAuthState({
            isLoadingLogout: false
        }))
    }
}
