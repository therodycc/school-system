import Image from "next/image";
import CustomBtnGroups from "../../components/common/btn-actions-groups";

interface HeadersTeacherI<T extends {}> {
    children: ({ columns }: { columns: any }) => JSX.Element
    showModalEdit: (item: T) => void
    removeItem: (item: T) => void
}

export const HeadersSubjects = <T extends {}>({ children, showModalEdit, removeItem }: HeadersTeacherI<T>) => {

    const columns = [
        {
            title: "Profesor",
            key: "name"
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