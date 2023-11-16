import { useCallback, useEffect, useState } from "react";
import sweetAlert from "../helpers/alerts/sweetAlert.helper";
import { teacherSelector } from "../redux-toolkit/slices/teacher/teacher.selector";
import { TeacherI } from "../interfaces/teacher/teacher.interface";
import { getAllTeacher, removeTeacher } from "../redux-toolkit/slices/teacher/teacher.actions";
import { useDispatch, useSelector } from "../redux-toolkit/store";


export const useTeachers = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const teachers = useSelector(teacherSelector.getAllTeachers)

    const [dataModalUtility, setDataModalUtility] = useState<TeacherI | null>(null);

    useEffect(() => {
        dispatch(getAllTeacher())
    }, [dispatch]);

    const removeItem = useCallback(async (item: TeacherI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        dispatch(removeTeacher(item.id))
    }, [dispatch])


    const showModalEdit = (item: TeacherI) => {
        setDataModalUtility(item)
        setShowModal(!showModal)
    }

    const addNew = (item: TeacherI) => {
        setShowModal(true);
        setDataModalUtility(null);
    }

    return {
        teachers,
        removeItem,
        showModalEdit,
        dataModalUtility,
        showModal,
        setShowModal,
        addNew
    }
}
