import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sweetAlert from "../helpers/alerts/sweetAlert.helper";
import { StudentI } from "../interfaces/student/student.interface";
import { RootState } from "../redux-toolkit/store";
import teacherProvider from "../providers/teacher/teacher.provider";
import { TeacherI } from "../interfaces/teacher/teacher.interface";


export const useTeachers = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const teachers = useSelector((state: RootState) => [
        {
            id: 1,
            name: "John",
            lastName: "Doe",
            profession: "Mathematics",
            email: "john.doe@example.com",
        },
        {
            id: 2,
            name: "Alice",
            lastName: "Smith",
            profession: "Science",
            email: "alice.smith@example.com",
        },
        {
            id: 3,
            name: "Bob",
            lastName: "Johnson",
            profession: "History",
            email: "bob.johnson@example.com",
        },
    ])

    const [dataModalUtility, setDataModalUtility] = useState<StudentI | null>(null);

    const getData = useCallback(async () => {
    }, [])

    useEffect(() => {
        getData()
    }, [getData]);

    const removeItem = useCallback(async (item: TeacherI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        const res = await teacherProvider.remove(item.id!)
        if (res.error) return sweetAlert.alert("Error", res?.error?.message, "error");
        sweetAlert.alert("Success", "Done!", "success");
    }, [])


    const showModalEdit = (item: StudentI) => {
        setDataModalUtility(item)
        setShowModal(!showModal)
    }

    const addNew = (item: StudentI) => {
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
