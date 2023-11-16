import { useCallback, useState } from "react";
import { useClassrooms } from "../../../hooks/useClassrooms";
import { HeadersClassrooms } from "../../../settings/classrooms/headers";

import Box from '../../common/box';
import Button from '../../common/button';
import Table from '../../common/table';
import { ClassroomsModal } from "./modals";
import { AssignTeacherToClassroom } from "./modals/assignClassroomsToTeacher";
import { ClassroomI } from "../../../interfaces/classrooms/classrooms.interface";

export const Classrooms = () => {
    const { classrooms, showModal, dataModalUtility, removeItem, showModalEdit, setShowModal, addNew } = useClassrooms()
    const [classroomSelected, setClassroomSelected] = useState<ClassroomI | null>(null);

    const assignTeacher = useCallback((item: ClassroomI) => {
        setClassroomSelected(item)
    }, [])

    const closeModal = useCallback(() => {
        setClassroomSelected(null)
    }, [setClassroomSelected])

    const removeAllUnassignedRooms = useCallback(() => {

    }, [])

    return (
        <>
            <Box
                customClassRightSection='col-lg-6'
                rightSection={<>
                    <div className="d-flex">
                        <Button
                            bgClass={"light"}
                            type={"button"}
                            loading={false}
                            action={removeAllUnassignedRooms}
                        >
                            Eliminar aulas no asignadas
                        </Button>
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
                leftSection={undefined}>
                <HeadersClassrooms
                    removeItem={removeItem}
                    showModalEdit={showModalEdit}
                    assignTeacher={assignTeacher}
                >
                    {({ columns }) => <Table
                        headItems={columns}
                        bodyItems={classrooms}
                    />}
                </HeadersClassrooms>
            </Box>
            {showModal && (
                <ClassroomsModal
                    active={showModal}
                    setToggle={() => {
                        setShowModal(false)
                    }}
                    data={dataModalUtility} />
            )}
            {!!classroomSelected && (
                <AssignTeacherToClassroom
                    active={!!classroomSelected}
                    toggle={closeModal}
                    classroom={classroomSelected} />
            )}
        </>
    );
}