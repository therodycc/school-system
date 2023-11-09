import CustomBtnGroups from "../../components/common/btn-actions-groups";
import Button from "../../components/common/button";

interface HeadersClassroomsI<T extends {}> {
    children: ({ columns }: { columns: any }) => JSX.Element
    showModalEdit: (item: T) => void
    removeItem: (item: T) => void
    assignTeacher: (item: T) => void
}

export const HeadersClassrooms = <T extends {}>({ children, showModalEdit, removeItem, assignTeacher }: HeadersClassroomsI<T>) => {

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
            render: ({ item }: { item: T }) => {
                return (<CustomBtnGroups
                    onEdit={() => { showModalEdit(item) }}
                    onDelete={() => { removeItem(item); }} />);
            },
        },
        {
            title: "Actions",
            render: ({ item }: { item: T }) => {
                return (<Button
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