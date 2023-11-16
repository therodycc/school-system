import sweetAlert from "../../../helpers/alerts/sweetAlert.helper";
import { TeacherI } from "../../../interfaces/teacher/teacher.interface";
import teacherProvider from "../../../providers/teacher/teacher.provider";
import { setTeacherState } from "./teacher.slice";

export const getAllTeacher = () => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.getAll()
        if (!res) return sweetAlert.toast("Error", res?.error?.message, "error");
        dispatch(setTeacherState({
            result: res
        }))
    }
}

export const createTeacher = (teacher: TeacherI, successAction?: () => void) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.create(teacher)
        if (!res) return sweetAlert.alert("Error", "Error creando maestro", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.()
        dispatch(getAllTeacher())
    }
}

export const updateTeacher = (id: number, data: TeacherI, successAction?: () => void) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.updateData(id, data)
        if (!res) return sweetAlert.alert("Error", "Error actualizando maestro", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.()
        dispatch(getAllTeacher())
    }
}

export const removeTeacher = (id: number) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.remove(id)
        if (!res) return sweetAlert.alert("Error", "Error borrando maestro", "error");
        sweetAlert.alert("Success", "Done!", "success");
        dispatch(getAllTeacher())
    }
}