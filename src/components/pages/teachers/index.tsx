import { useTeachers } from "../../../hooks/useTeachers";
import { HeadersTeachers } from "../../../settings/teachers/headers";

import Box from '../../common/box';
import Button from '../../common/button';
import Table from '../../common/table';
import { TeacherModal } from './modals';

export const Teachers = () => {
    const { teachers, showModal, dataModalUtility, removeItem, showModalEdit, setShowModal, addNew } = useTeachers()

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
                            Add new
                        </Button>
                    </div>
                </>}
                leftSection={undefined}                >
                <HeadersTeachers
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
        </>
    );
}