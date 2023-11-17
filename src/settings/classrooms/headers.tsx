import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CustomBtnGroups from "../../components/common/btn-actions-groups";
import Button from "../../components/common/button";
import { ClassroomI } from "../../interfaces/classrooms/classrooms.interface";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

interface HeadersClassroomsI {
    children: ({ columns }: { columns: any }) => JSX.Element
    showModalEdit: (item: ClassroomI) => void
    removeItem: (item: ClassroomI) => void
    assignTeacher: (item: ClassroomI) => void
}

export const HeadersClassrooms = ({ children, showModalEdit, removeItem, assignTeacher }: HeadersClassroomsI) => {

    const columns = [
        {
            title: "Profesor",
            key: "name"
        },
        {
            title: "Capacidad",
            key: "capacity"
        },
        {
            title: "Ubicación",
            key: "location"
        },
        {
            title: "Actions",
            render: ({ item }: { item: ClassroomI }) => {
                return (<CustomBtnGroups
                    onEdit={() => { showModalEdit(item) }}
                    onDelete={() => { removeItem(item); }} />);
            },
        },
        {
            title: "Actions",
            render: ({ item }: { item: ClassroomI }) => {
                return item?.teacherId ? (<>
                    <Button
                        bgClass={"success"}
                        type={"button"}
                        loading={false}
                        disabled={true}
                        customClass="text-light font-weight-bold"
                    >
                        Profesor asignado
                    </Button>
                    <Button
                        bgClass={"light"}
                        type={"button"}
                        loading={false}
                        action={() => assignTeacher(item)}
                    >
                        <FontAwesomeIcon icon={faEdit} />
                    </Button>
                </>) : (<Button
                    bgClass={"warning"}
                    type={"button"}
                    loading={false}
                    action={() => assignTeacher(item)}
                >
                    Asignar profesor
                </Button>
                )
            },
        },
    ]

    return children({ columns })
}