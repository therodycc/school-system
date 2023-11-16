import { useCallback, useState } from "react";
import { useTeachers } from "../../../hooks/useTeachers";
import { HeadersTeachers } from "../../../settings/teachers/headers";

import { TeacherI } from "../../../interfaces/teacher/teacher.interface";
import Box from '../../common/box';
import Button from '../../common/button';
import Table from '../../common/table';
import { TeacherModal } from './modals';
import { AssignSubjects } from "./modals/assignSubjects";

export const Teachers = () => {
    const { teachers, showModal, dataModalUtility, removeItem, showModalEdit, setShowModal, addNew } = useTeachers()
    const [teacherSelected, setTeacherSelected] = useState<TeacherI | null>(null);

    const assignSubjects = useCallback((item: TeacherI) => {
        setTeacherSelected(item)
    }, [])

    const closeModal = useCallback(() => {
        setTeacherSelected(null)
    }, [setTeacherSelected])

    return (
        <>
            <Box
                customClassLeftSection='col-lg-8'
                customClassRightSection='col-lg-4'
                rightSection={<>
                    <div className="">
                        <Button
                            bgClass={"warning"}
                            type={"button"}
                            loading={false}
                            action={addNew}
                        >
                            Agregar nuevo
                        </Button>
                    </div>
                </>}
                leftSection={undefined}                >
                <HeadersTeachers
                    assignSubjects={assignSubjects}
                    removeItem={removeItem}
                    showModalEdit={showModalEdit}
                >
                    {({ columns }) => <Table
                        headItems={columns}
                        bodyItems={teachers}
                    />}
                </HeadersTeachers>
            </Box>
            {showModal && (
                <TeacherModal
                    active={showModal}
                    setToggle={() => {
                        setShowModal(false)
                    }}
                    data={dataModalUtility} />
            )}
            {!!teacherSelected && (
                <AssignSubjects
                    active={!!teacherSelected}
                    setToggle={closeModal}
                    data={teacherSelected} />
            )}
        </>
    );
}