import sweetAlert from "../../../helpers/alerts/sweetAlert.helper";
import { ClassroomI } from "../../../interfaces/classrooms/classrooms.interface";
import classroomProvider from "../../../providers/classroom/classroom.provider";
import { setClassroomState } from "./classroom.slice";

export const getAllClassroom = () => {
    return async (dispatch: Function) => {
        const res = await classroomProvider.getAll();
        if (!res || res?.error)
            return [
                sweetAlert.toast("Error", "", "error"),
                dispatch(
                    setClassroomState({
                        result: [],
                    })
                ),
            ];
        dispatch(
            setClassroomState({
                result: res,
            })
        );
    };
};

export const assignTeacherToClassroom = (
    classroomId: number,
    teacherId: number,
    successAction?: () => void
) => {
    return async (dispatch: Function) => {
        const res = await classroomProvider.assignTeacher(classroomId, teacherId);
        if (!res || res?.error) return sweetAlert.toast("Error", "", "error");
        dispatch(getAllClassroom());
        successAction?.();
    };
};

export const createClassroom = (
    classroom: ClassroomI,
    successAction?: () => void
) => {
    return async (dispatch: Function) => {
        const res = await classroomProvider.create(classroom);
        if (!res || res?.error)
            return sweetAlert.alert("Error", "Error creando aula", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.();
        dispatch(getAllClassroom());
    };
};

export const updateClassroom = (
    id: number,
    data: ClassroomI,
    successAction?: () => void
) => {
    return async (dispatch: Function) => {
        const res = await classroomProvider.updateData(id, data);
        if (!res || res?.error)
            return sweetAlert.alert("Error", "Error actualizando aula", "error");
        sweetAlert.alert("Success", "Done!", "success");
        successAction?.();
        dispatch(getAllClassroom());
    };
};

export const removeClassroom = (id: number) => {
    return async (dispatch: Function) => {
        const res = await classroomProvider.remove(id);
        if (!res || res?.error)
            return sweetAlert.alert("Error", "Error borrando aula", "error");
        sweetAlert.alert("Success", "Done!", "success");
        dispatch(getAllClassroom());
    };
};
