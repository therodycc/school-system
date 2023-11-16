import { useCallback, useEffect, useState } from "react";

import sweetAlert from "../helpers/alerts/sweetAlert.helper";
import { ClassroomI } from "../interfaces/classrooms/classrooms.interface";
import { getAllClassroom, removeClassroom } from "../redux-toolkit/slices/classroom/classroom.actions";
import { classroomSelector } from "../redux-toolkit/slices/classroom/classroom.selector";
import { useDispatch, useSelector } from "../redux-toolkit/store";


export const useClassrooms = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const classrooms = useSelector(classroomSelector.getAllClassroom)

    const [dataModalUtility, setDataModalUtility] = useState<ClassroomI | null>(null);

    useEffect(() => {
        dispatch(getAllClassroom())
    }, [dispatch]);

    const removeItem = useCallback(async (item: ClassroomI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        dispatch(removeClassroom(item.id))
    }, [dispatch])


    const showModalEdit = (item: ClassroomI) => {
        setDataModalUtility(item)
        setShowModal(!showModal)
    }

    const addNew = (item: ClassroomI) => {
        setShowModal(true);
        setDataModalUtility(null);
    }

    return {
        classrooms,
        removeItem,
        showModalEdit,
        dataModalUtility,
        showModal,
        setShowModal,
        addNew
    }
}
