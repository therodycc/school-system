import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import sweetAlert from "../helpers/alerts/sweetAlert.helper";
import teacherProvider from "../providers/teacher/teacher.provider";
import { RootState } from "../redux-toolkit/store";
import { ClassroomI } from "../interfaces/classrooms/classrooms.interface";


export const useClassrooms = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const classrooms = useSelector((state: RootState) => [
        {
            id: 1,
            name: "Room A",
            capacity: 30,
            location: "Building 1, Floor 2",
            created_at: new Date("2023-11-07T09:00:00"),
        },
        {
            id: 2,
            name: "Room B",
            capacity: 25,
            location: "Building 2, Floor 1",
            created_at: new Date("2023-11-07T10:30:00"),
        },
        {
            id: 3,
            name: "Room C",
            capacity: 40,
            location: "Building 3, Floor 3",
            created_at: new Date("2023-11-07T12:00:00"),
        },
    ])

    const [dataModalUtility, setDataModalUtility] = useState<ClassroomI | null>(null);

    const getData = useCallback(async () => {
    }, [])

    useEffect(() => {
        getData()
    }, [getData]);

    const removeItem = useCallback(async (item: ClassroomI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        const res = await teacherProvider.remove(item.id!)
        if (res.error) return sweetAlert.alert("Error", res?.error?.message, "error");
        sweetAlert.alert("Success", "Done!", "success");
    }, [])


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
