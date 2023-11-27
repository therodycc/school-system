import sweetAlert from "../../../helpers/alerts/sweetAlert.helper";
import { TeacherI } from "../../../interfaces/teacher/teacher.interface";
import teacherProvider from "../../../providers/teacher/teacher.provider";
import { setTeacherState } from "./teacher.slice";

export const getAllTeacher = () => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.getAll();
        if (!res || res?.error)
            return [
                sweetAlert.toast("Error", "", "error"),
                dispatch(
                    setTeacherState({
                        result: [],
                    })
                ),
            ];
        dispatch(
            setTeacherState({
                result: res,
            })
        );
    };
};

export const getTeacher = (teacherId: number) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.getOne(teacherId);
        if (!res || res?.error) return sweetAlert.toast("Error", "", "error");
        dispatch(
            setTeacherState({
                teacherSelected: res,
            })
        );
    };
};

export const getAllTeacherSubjectsAssigned = (teacherId: number) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.getAllSubjectsAssigned(teacherId);
        if (!res || res?.error)
            return sweetAlert.toast("Error", res?.error?.message, "error");
        dispatch(
            setTeacherState({
                subjects: res,
            })
        );
    };
};

export const createTeacher = (
    teacher: TeacherI,
    successAction?: () => void
) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.create(teacher);
        if (!res || res?.error)
            return sweetAlert.alert("Error", "Error creando maestro", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.();
        dispatch(getAllTeacher());
    };
};

export const updateTeacher = (
    id: number,
    data: TeacherI,
    successAction?: () => void
) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.updateData(id, data);
        if (!res || res?.error)
            return sweetAlert.alert("Error", "Error actualizando maestro", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.();
        dispatch(getAllTeacher());
    };
};

export const assignSubjectsTeacher = (
    teacherId: number,
    subjects: { subjectId: number }[],
    successAction?: () => void
) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.assignSubjectsTeacher(
            teacherId,
            subjects
        );
        if (!res || res?.error)
            return sweetAlert.alert(
                "Error",
                "Error asignando materias al profesor",
                "error"
            );
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.();
        dispatch(getAllTeacher());
    };
};

export const removeTeacher = (id: number) => {
    return async (dispatch: Function) => {
        const res = await teacherProvider.remove(id);
        if (!res || res?.error)
            return sweetAlert.alert("Error", "Error borrando maestro", "error");
        sweetAlert.alert("Success", "Done!", "success");
        dispatch(getAllTeacher());
    };
};
