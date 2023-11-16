import { teacherSelector } from "../../../../redux-toolkit/slices/teacher/teacher.selector";
import { useDispatch, useSelector } from "../../../../redux-toolkit/store";
import { inputsDataTeacherToClassroom } from "../../../../settings/classrooms/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";


export const AssignTeacherToClassroom = ({ active, toggle, classroom }: any) => {
    const dispatch = useDispatch()
    const teachers = useSelector(teacherSelector.getAllTeachers)

    const handleSubmit = (form: any) => {
        console.log(`🪲 | ----->   form:`, form)
    };

    return (
        <>
            <Modal title="Profesor" active={active} setToggle={toggle} modalStylesContainer={{
                width: "300px"
            }}>
                <Form
                    keyForm="teachers"
                    inputsData={inputsDataTeacherToClassroom}
                    handleSubmit={handleSubmit}
                    actions={{
                        teachers
                    }}
                    footerSection={
                        <>
                            <div className="col-lg-12">
                                <Button
                                    action={() => { }}
                                    customClass="w-100"
                                    bgClass={"light"}
                                    type={"submit"}
                                    loading={false}
                                >
                                    Assignar
                                </Button>
                            </div>
                        </>
                    }
                />
            </Modal>
        </>
    );
};
