import sweetAlert from "../../../helpers/alerts/sweetAlert.helper";
import { SubjectI } from "../../../interfaces/subjects/subjects.interface";

import subjectProvider from "../../../providers/subject/subject.provider";
import { setSubjectState } from "./subject.slice";

export const getAllSubject = () => {
    return async (dispatch: Function) => {
        const res = await subjectProvider.getAll()
        if (!res) return sweetAlert.toast("Error", "", "error");
        dispatch(setSubjectState({
            result: res
        }))
    }
}

export const createSubject = (subject: SubjectI, successAction?: () => void) => {
    return async (dispatch: Function) => {
        const res = await subjectProvider.create(subject)
        if (!res) return sweetAlert.alert("Error", "Error creando materia", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.()
        dispatch(getAllSubject())
    }
}

export const updateSubject = (id: number, data: SubjectI, successAction?: () => void) => {
    return async (dispatch: Function) => {
        const res = await subjectProvider.updateData(id, data)
        if (!res) return sweetAlert.alert("Error", "Error actualizando materia", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.()
        dispatch(getAllSubject())
    }
}

export const removeSubject = (id: number) => {
    return async (dispatch: Function) => {
        const res = await subjectProvider.remove(id)
        if (!res) return sweetAlert.alert("Error", "Error borrando materia", "error");
        sweetAlert.alert("Success", "Done!", "success");
        dispatch(getAllSubject())
    }
}