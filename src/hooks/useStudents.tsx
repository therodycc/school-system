import { useCallback, useEffect, useState } from 'react'
import sweetAlert from "../helpers/alerts/sweetAlert.helper"
import studentProvider from "../providers/student/student.provider"
import { RootState, useDispatch, useSelector } from "../redux-toolkit/store"
import { StudentI } from "../interfaces/student/student.interface"

export const useStudents = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const students = useSelector((state: RootState) => [
        {
            id: 1,
            name: "John",
            lastName: "Doe",
            birthday: new Date("1990-01-15"),
            student_code: "ST12345",
            motherName: "Jane Doe",
            fatherName: "Jack Doe",
            address: "123 Main St",
            created_at: new Date("2023-11-07T10:00:00"),
        },
        {
            id: 2,
            name: "Alice",
            lastName: "Smith",
            birthday: new Date("1988-03-20"),
            student_code: "ST67890",
            motherName: "Mary Smith",
            fatherName: "Bob Smith",
            address: "456 Elm St",
            created_at: new Date("2023-11-07T11:30:00"),
        },
    ])

    const [dataModalUtility, setDataModalUtility] = useState<StudentI | null>(null);

    const getData = useCallback(async () => {
        // const res = await studentProvider.getAll()
        // if (res?.error) return sweetAlert.toast("", res?.error?.message, "error");
        // dispatch(addDebts({ result: res?.data }));
    }, [])

    useEffect(() => {
        getData()
    }, [getData]);

    const removeItem = useCallback(async (item: StudentI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        const res = await studentProvider.remove(item.id!)
        if (res.error) return sweetAlert.alert("Error", res?.error?.message, "error");
        // dispatch(removeDebt({ uuid: String(item?.id) }))
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
        students,
        removeItem,
        showModalEdit,
        dataModalUtility,
        showModal,
        setShowModal,
        addNew
    }
}
