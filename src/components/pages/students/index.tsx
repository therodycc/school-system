import { useStudents } from "../../../hooks/useCrud";
import { HeadersStudents } from "../../../settings/students/headers";

import Box from '../../common/box';
import Button from '../../common/button';
import Table from '../../common/table';
import ModalDebts from './modals';

export const Students = () => {
    const { students, showModal, dataModalUtility, removeItem, showModalEdit, setShowModal,addNew } = useStudents()

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
                <HeadersStudents
                    removeItem={removeItem}
                    showModalEdit={showModalEdit}
                >
                    {({ columns }) => <Table
                        headItems={columns}
                        bodyItems={students}
                    />}
                </HeadersStudents>
            </Box>
            {showModal && (
                <ModalDebts
                    active={showModal}
                    setToggle={() => {
                        setShowModal(false)
                    }}
                    data={dataModalUtility} />
            )}
        </>
    );
}