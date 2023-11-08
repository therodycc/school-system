import { useDispatch } from "react-redux";
import sweetAlert from "../../../../helpers/alerts/sweetAlert.helper";
import { StudentI, } from "../../../../interfaces/student/student.interface";
import studentProvider from "../../../../providers/student/student.provider";
import { addNewDebt, updateDebt } from "../../../../redux-toolkit/slices/debts.slice";
import { inputsDataDebtsModal } from "../../../../settings/students/inputs-data.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import Modal from "../../../common/modal";

const StudentModal = ({ active, setToggle: toggle, data }: any) => {
    const dispatch = useDispatch();

    const handleSubmit = (form: any) => {
        data?.uuid
            ? updateData(data.uuid, {
                ...form,
                ...(form.expense && { expense: +form.expense }),
            })
            : createNew(form);
        toggle();
    };

    const createNew = async (form: StudentI) => {
        const result = await studentProvider.create(form)
        dispatch(addNewDebt({ debt: result.data.response }))
    }

    const updateData = async (uuid: string, form: StudentI) => {
        const res = await studentProvider.update(uuid, {
            ...form,
            ...(form.expense && { expense: +form.expense }),
            ...(form.paidOut && { paidOut: +form.paidOut }),
        })

        if (res.error) return sweetAlert.alert("Error", res?.error?.message, "error");
        sweetAlert.alert("Success", "Updated!", "success");
        dispatch(updateDebt({
            debt: {
                ...form,
                ...(form.expense && { expense: +form.expense }),
                ...(form.paidOut && { paidOut: +form.paidOut }),
            }
        }))
    }

    return (
        <>
            <Modal title="Debts" active={active} setToggle={toggle}>
                <Form
                    keyForm="debts"
                    inputsData={inputsDataDebtsModal}
                    handleSubmit={handleSubmit}
                    initialState={data || {
                        expense: 0,
                        name: "",
                        status: "PENDING",
                        urgency: "WHENEVER",
                        description: "",
                        category: "",
                        to: ""
                    }}
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

export default StudentModal;
