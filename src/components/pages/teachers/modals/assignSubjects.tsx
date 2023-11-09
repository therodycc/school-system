import { useState } from "react";
import CheckboxCard from "../../../common/card";
import Modal from "../../../common/modal";
import Button from "../../../common/button";

export const AssignSubjects = ({ active, setToggle: toggle, data }: any) => {
    const [subjects, setSubjects] = useState([
        {
            id: 1,
            name: "Mathematics",
            active: false
        },
        {
            id: 2,
            name: "Science",
            active: false
        },
        {
            id: 3,
            name: "History",
            active: false
        },
    ]);

    const handleSubmit = () => {
        const activeSubjects = subjects.filter(x => x.active)
        console.log(`🪲 | ----->   activeSubjects:`, activeSubjects)
    };

    const handleActive = (item: any) => {
        setSubjects(_prev => _prev.map((sbj) => {
            if (sbj.id === item.id) {
                return {
                    ...sbj,
                    active: !item.active
                }
            }
            return sbj
        }))
    }

    return (
        <>
            <Modal
                title="Materias asignadas"
                active={active}
                setToggle={toggle}
                modalStylesContainer={{ width: "600px", padding: "20px" }}
            >
                {subjects.map((item, index) => (<div key={index} className="mb-3" onClick={() => handleActive(item)}>
                    <CheckboxCard title={item?.name} active={item.active} />
                </div>))}

                <div className="col-lg-4 offset-8">
                    <Button
                        action={handleSubmit}
                        customClass="w-100"
                        bgClass={"light"}
                        type={"submit"}
                        loading={false}
                    >
                        Guardar
                    </Button>
                </div>
            </Modal>
        </>
    );
};
