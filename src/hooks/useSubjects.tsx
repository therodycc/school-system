import { useCallback, useEffect, useState } from "react";

import sweetAlert from "../helpers/alerts/sweetAlert.helper";
import { SubjectI } from "../interfaces/subjects/subjects.interface";
import { getAllSubject, removeSubject } from "../redux-toolkit/slices/subject/subject.actions";
import { subjectSelector } from "../redux-toolkit/slices/subject/subject.selector";
import { useDispatch, useSelector } from "../redux-toolkit/store";

export const useSubjects = () => {
    const dispatch = useDispatch()
    const [showModal, setShowModal] = useState(false)
    const subjects = useSelector(subjectSelector.getAllSubject)

    const [dataModalUtility, setDataModalUtility] = useState<SubjectI | null>(null);

    useEffect(() => {
        dispatch(getAllSubject())
    }, [dispatch]);

    const removeItem = useCallback(async (item: SubjectI) => {
        const confirm = await sweetAlert.question("Are you sure?", "warning");
        if (!confirm) return;
        dispatch(removeSubject(item.id))
    }, [dispatch])

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
