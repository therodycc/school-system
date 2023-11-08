import { inputsDataStudent } from "../../../../settings/students/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";

export const StudentModal = ({ active, setToggle: toggle, data }: any) => {
    const handleSubmit = (form: any) => {
        console.log(`🪲 | ----->   form:`, form)
    };

    return (
        <>
            <Modal title="Estudiante" active={active} setToggle={toggle} modalStylesContainer={{
                width: "600px"
            }}>
                <Form
                    keyForm="debts"
                    inputsData={inputsDataStudent}
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
                                    Add
                                </Button>
                            </div>
                        </>
                    }
                />
            </Modal>
        </>
    );
};
