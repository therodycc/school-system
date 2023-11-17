import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { TeacherI } from "../../../../interfaces/teacher/teacher.interface";
import { subjectSelector } from "../../../../redux-toolkit/slices/subject/subject.selector";
import { assignSubjectsTeacher, getAllTeacherSubjectsAssigned } from "../../../../redux-toolkit/slices/teacher/teacher.actions";
import { teacherSelector } from "../../../../redux-toolkit/slices/teacher/teacher.selector";
import { useDispatch } from "../../../../redux-toolkit/store";
import Button from "../../../common/button";
import CheckboxCard from "../../../common/card";
import Modal from "../../../common/modal";

interface Props {
    active: boolean;
    setToggle: () => void;
    data: TeacherI;
}

export const AssignSubjects = ({ active, setToggle: toggle, data }: Props) => {
    const dispatch = useDispatch();
    const subjectsAssigned = useSelector(teacherSelector.subjects)
    const allSubjects = useSelector(subjectSelector.getAllSubject)
    const [subjects, setSubjects] = useState<{ id: number, name: string, active: boolean }[]>([]);

    useEffect(() => {
        if (subjectsAssigned)
            setSubjects(allSubjects?.map(sub => ({ ...sub, active: false })) || [])

        setSubjects(_prev => _prev?.map(sub => {
            subjectsAssigned?.forEach((item) => {
                if (item.id === sub.id) sub.active = true
            })
            return sub
        }))
    }, [allSubjects, subjectsAssigned]);

    useEffect(() => {
        dispatch(getAllTeacherSubjectsAssigned(data.id))
    }, [data.id, dispatch]);

    const handleSubmit = () => {
        const activeSubjects = subjects.filter(x => x.active).map(sub => ({ subjectId: sub.id }))
        dispatch(assignSubjectsTeacher(data.id, activeSubjects, toggle))
    };

    const handleActive = (item: any) => {
        setSubjects(_prev => _prev.map((sbj) => {
            if (sbj.id === item.id) {
                return {
                    ...sbj,
                    active: !item.active
                }
            }
            return sbj
        }))
    }

    return (
        <>
            <Modal
                title="Materias asignadas"
                active={active}
                setToggle={toggle}
                modalStylesContainer={{ width: "600px", padding: "20px" }}
            >
                {subjects?.map((item, index) => (<div key={index} className="mb-3" onClick={() => handleActive(item)}>
                    <CheckboxCard title={item?.name} active={item.active} />
                </div>))}

                <div className="col-lg-4 offset-8">
                    <Button
                        action={handleSubmit}
                        customClass="w-100"
                        bgClass={"light"}
                        type={"submit"}
                        loading={false}
                    >
                        Guardar
                    </Button>
                </div>
            </Modal>
        </>
    );
};
