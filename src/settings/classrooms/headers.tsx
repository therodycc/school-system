import CustomBtnGroups from "../../components/common/btn-actions-groups";

interface HeadersClassroomsI<T extends {}> {
    children: ({ columns }: { columns: any }) => JSX.Element
    showModalEdit: (item: T) => void
    removeItem: (item: T) => void
}

export const HeadersClassrooms = <T extends {}>({ children, showModalEdit, removeItem }: HeadersClassroomsI<T>) => {

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
    ]

    return children({ columns })
}