import sweetAlert from "../../../helpers/alerts/sweetAlert.helper";
import { StudentI } from "../../../interfaces/student/student.interface";
import studentProvider from "../../../providers/student/student.provider";
import { setStudentState } from "./students.slice";

export const getAllStudents = () => {
    return async (dispatch: Function) => {
        const res = await studentProvider.getAll()
        if (!res) return sweetAlert.toast("Error", res?.error?.message, "error");
        dispatch(setStudentState({
            result: res
        }))
    }
}

export const createStudent = (student: StudentI, successAction?: () => void) => {
    return async (dispatch: Function) => {
        const res = await studentProvider.create(student)
        if (!res) return sweetAlert.alert("Error", "Error creando estudiante", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.()
        dispatch(getAllStudents())
    }
}

export const updateStudent = (id: number, data: StudentI, successAction?: () => void) => {
    return async (dispatch: Function) => {
        const res = await studentProvider.updateData(id, data)
        if (!res) return sweetAlert.alert("Error", "Error actualizando estudiante", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.()
        dispatch(getAllStudents())
    }
}

export const removeStudent = (id: number) => {
    return async (dispatch: Function) => {
        const res = await studentProvider.remove(id)
        if (!res) return sweetAlert.alert("Error", "Error borrando estudiante", "error");
        sweetAlert.alert("Success", "Done!", "success");
        dispatch(getAllStudents())
    }
}