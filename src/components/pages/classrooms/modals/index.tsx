import { ClassroomI } from "../../../../interfaces/classrooms/classrooms.interface";
import { createClassroom, updateClassroom } from "../../../../redux-toolkit/slices/classroom/classroom.actions";
import { useDispatch } from "../../../../redux-toolkit/store";
import { inputsDataClassrooms } from "../../../../settings/classrooms/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";

interface Props {
    active: boolean;
    setToggle: () => void;
    data: ClassroomI | null;
}


export const ClassroomsModal = ({ active, setToggle: toggle, data }: Props) => {
    const dispatch = useDispatch();

    const handleSubmit = (form: ClassroomI) => {
        const payload: ClassroomI = { ...data, ...form };

        data
            ? dispatch(updateClassroom(data.id, payload, toggle))
            : dispatch(createClassroom(payload, toggle));
    };

    return (
        <>
            <Modal title="Aulas" active={active} setToggle={toggle} modalStylesContainer={{
                width: "600px"
            }}>
                <Form
                    keyForm="teachers"
                    inputsData={inputsDataClassrooms}
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
