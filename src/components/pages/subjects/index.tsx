import { useSubjects } from "../../../hooks/useSubjects";
import { HeadersSubjects } from "../../../settings/subjects/headers";

import Box from '../../common/box';
import Button from '../../common/button';
import Table from '../../common/table';
import { SubjectModal } from "./modals";

export const Subjects = () => {
    const { subjects, showModal, dataModalUtility, removeItem, showModalEdit, setShowModal, addNew } = useSubjects()

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
                <HeadersSubjects
                    removeItem={removeItem}
                    showModalEdit={showModalEdit}
                >
                    {({ columns }) => <Table
                        headItems={columns}
                        bodyItems={subjects}
                    />}
                </HeadersSubjects>
            </Box>
            {showModal && (
                <SubjectModal
                    active={showModal}
                    setToggle={() => {
                        setShowModal(false)
                    }}
                    data={dataModalUtility} />
            )}
        </>
    );
}