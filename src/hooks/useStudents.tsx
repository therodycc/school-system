import { useCallback, useEffect, useState } from 'react'
import sweetAlert from "../helpers/alerts/sweetAlert.helper"
import { StudentI } from "../interfaces/student/student.interface"
import studentProvider from "../providers/student/student.provider"
import { getAllStudents, removeStudent } from "../redux-toolkit/slices/student/student.actions"
import { studentSelector } from "../redux-toolkit/slices/student/student.selector"
import { useDispatch, useSelector } from "../redux-toolkit/store"

export const useStudents = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const students = useSelector(studentSelector.getAllStudents)

    const [dataModalUtility, setDataModalUtility] = useState<StudentI | null>(null);

    useEffect(() => {
        dispatch(getAllStudents())
    }, [dispatch]);

    const removeItem = useCallback(async (item: StudentI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        dispatch(removeStudent(item.id))
    }, [dispatch])


    const showModalEdit = (item: StudentI) => {
        setDataModalUtility(item)
        setShowModal(!showModal)
    }

    const addNew = (item: StudentI) => {
        setShowModal(true);
        setDataModalUtility(null);
    }

    return {
        students,
        removeItem,
        showModalEdit,
        dataModalUtility,
        showModal,
        setShowModal,
        addNew
    }
}
