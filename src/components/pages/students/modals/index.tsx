import { StudentI } from "../../../../interfaces/student/student.interface";
import { inputsDataStudent, inputsHeadersStudentsRules } from "../../../../settings/students/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";
import {
    createStudent,
    updateStudent,
} from "../../../../redux-toolkit/slices/student/student.actions";
import { useDispatch } from "../../../../redux-toolkit/store";

interface Props {
    active: boolean;
    setToggle: () => void;
    data: StudentI | null;
}

export const StudentModal = ({ active, setToggle: toggle, data }: Props) => {
    const dispatch = useDispatch();

    const handleSubmit = (form: StudentI) => {
        const payload: StudentI = {
            ...data,
            ...form,
            ...((form?.birthday || data?.birthday) && {
                birthday: new Date(form.birthday || data!.birthday).toISOString()
            })
        };
        data
            ? dispatch(updateStudent(data.id, payload, toggle))
            : dispatch(createStudent(payload, toggle));
    };

    return (
        <>
            <Modal
                title="Estudiante"
                active={active}
                setToggle={toggle}
                modalStylesContainer={{
                    maxWidth: "600px",
                }}
            >
                <Form
                    keyForm="students"
                    inputsData={inputsDataStudent}
                    handleSubmit={handleSubmit}
                    dataRules={inputsHeadersStudentsRules}
                    initialState={data}
                    footerSection={
                        <>
                            <div className="col-lg-4 offset-8">
                                <Button
                                    action={() => { }}
                                    customClass="w-100"
                                    bgClass={"light"}
                                    type={"submit"}
                                    loading={false}
                                >
                                    {data ? "Guardar" : "Agregar"}
                                </Button>
                            </div>
                        </>
                    }
                />
            </Modal>
        </>
    );
};
