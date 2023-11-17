import CustomBtnGroups from "../../components/common/btn-actions-groups";
import Button from "../../components/common/button";
import { TeacherI } from "../../interfaces/teacher/teacher.interface";

interface HeadersTeacherI {
    children: ({ columns }: { columns: any }) => JSX.Element
    showModalEdit: (item: TeacherI) => void
    removeItem: (item: TeacherI) => void
    assignSubjects: (item: TeacherI) => void
}

export const HeadersTeachers = ({ children, showModalEdit, removeItem, assignSubjects }: HeadersTeacherI) => {

    const columns = [
        {
            title: "Profesor",
            render: ({ item }: any) => {
                return (
                    <div className="d-flex ">
                        {/* <Image
                            src={{
                                src: "https://moorepediatricnc.com/wp-content/uploads/2022/08/default_avatar.jpg",
                                width: 50,
                                height: 50,
                            }}
                            className="mr-2 rounded-lg"
                            alt=""
                        /> */}
                        <div className="d-flex flex-column">
                            <h6 className="mb-1 text-dark text-sm">{`${item.name} ${item.lastName}`}</h6>
                            <span className="text-xs">{item.email}</span>
                        </div>
                    </div>
                );
            },
        },
        {
            title: "Profesión",
            key: "profession"
        },
        {
            title: "Actions",
            render: ({ item }: { item: TeacherI }) => {
                return (<CustomBtnGroups
                    onEdit={() => { showModalEdit(item) }}
                    onDelete={() => { removeItem(item); }} />);
            },
        },
        {
            title: "Actions",
            render: ({ item }: { item: TeacherI }) => {
                return <Button
                    bgClass={"warning"}
                    type={"button"}
                    loading={false}
                    action={() => assignSubjects(item)}
                >
                    {true ? "Asignar materias" : "Modificar materias"}
                </Button>

            },
        },
    ]

    return children({ columns })
}