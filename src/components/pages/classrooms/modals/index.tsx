import { inputsDataClassrooms } from "../../../../settings/classrooms/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";

export const ClassroomsModal = ({ active, setToggle: toggle, data }: any) => {
    const handleSubmit = (form: any) => {
        console.log(`🪲 | ----->   form:`, form)
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
                                    Agregar
                                </Button>
                            </div>
                        </>
                    }
                />
            </Modal>
        </>
    );
};