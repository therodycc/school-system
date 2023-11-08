import { useClassrooms } from "../../../hooks/useClassrooms";
import { HeadersClassrooms } from "../../../settings/classrooms/headers";

import Box from '../../common/box';
import Button from '../../common/button';
import Table from '../../common/table';
import { ClassroomsModal } from "./modals";

export const Classrooms = () => {
    const { classrooms, showModal, dataModalUtility, removeItem, showModalEdit, setShowModal, addNew } = useClassrooms()

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
                leftSection={undefined}>
                <HeadersClassrooms
                    removeItem={removeItem}
                    showModalEdit={showModalEdit}
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
        </>
    );
}