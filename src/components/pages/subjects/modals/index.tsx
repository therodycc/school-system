import { SubjectI } from "../../../../interfaces/subjects/subjects.interface";
import { createSubject, updateSubject } from "../../../../redux-toolkit/slices/subject/subject.actions";
import { useDispatch } from "../../../../redux-toolkit/store";
import { inputsDataSubjects, inputsHeadersSubjectsRules } from "../../../../settings/subjects/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";

export const SubjectModal = ({ active, setToggle: toggle, data }: any) => {
    const dispatch = useDispatch();

    const handleSubmit = (form: SubjectI) => {
        const payload: SubjectI = { ...data, ...form };
        data
            ? dispatch(updateSubject(data.id, payload, toggle))
            : dispatch(createSubject(payload, toggle));
    };

    return (
        <>
            <Modal title="Materias" active={active} setToggle={toggle} modalStylesContainer={{
                width: "600px"
            }}>
                <Form
                    keyForm="subjects"
                    inputsData={inputsDataSubjects}
                    handleSubmit={handleSubmit}
                    dataRules={inputsHeadersSubjectsRules}
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
