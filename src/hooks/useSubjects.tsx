import { useState, useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import sweetAlert from "../helpers/alerts/sweetAlert.helper";
import { RootState } from "../redux-toolkit/store";
import teacherProvider from "../providers/teacher/teacher.provider";
import { SubjectI } from "../interfaces/subjects/subjects.interface";

export const useSubjects = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)

    const subjects = useSelector((state: RootState) => [
        {
            id: 1,
            name: "Mathematics",
        },
        {
            id: 2,
            name: "Science",
        },
        {
            id: 3,
            name: "History",
        },
    ])

    const [dataModalUtility, setDataModalUtility] = useState<SubjectI | null>(null);

    const getData = useCallback(async () => {
    }, [])

    useEffect(() => {
        getData()
    }, [getData]);

    const removeItem = useCallback(async (item: SubjectI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        const res = await teacherProvider.remove(item.id!)
        if (res.error) return sweetAlert.alert("Error", res?.error?.message, "error");
        sweetAlert.alert("Success", "Done!", "success");
    }, [])


    const showModalEdit = (item: SubjectI) => {
        setDataModalUtility(item)
        setShowModal(!showModal)
    }

    const addNew = (item: SubjectI) => {
        setShowModal(true);
        setDataModalUtility(null);
    }

    return {
        subjects,
        removeItem,
        showModalEdit,
        dataModalUtility,
        showModal,
        setShowModal,
        addNew
    }
}
