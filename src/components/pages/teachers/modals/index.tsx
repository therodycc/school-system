import { TeacherI } from "../../../../interfaces/teacher/teacher.interface";
import { updateTeacher, createTeacher } from "../../../../redux-toolkit/slices/teacher/teacher.actions";

import { useDispatch } from "../../../../redux-toolkit/store";
import { inputsDataTeacher } from "../../../../settings/teachers/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";

interface Props {
    active: boolean;
    setToggle: () => void;
    data: TeacherI | null;
}

export const TeacherModal = ({ active, setToggle: toggle, data }: Props) => {
    const dispatch = useDispatch();

    const handleSubmit = (form: TeacherI) => {
        const payload: TeacherI = { ...data, ...form };

        data
            ? dispatch(updateTeacher(data.id, payload, toggle))
            : dispatch(createTeacher(payload, toggle));
    };

    return (
        <>
            <Modal title="Profesor" active={active} setToggle={toggle} modalStylesContainer={{
                width: "600px"
            }}>
                <Form
                    keyForm="teachers"
                    inputsData={inputsDataTeacher}
                    handleSubmit={handleSubmit}
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
