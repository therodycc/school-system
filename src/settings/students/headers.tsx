import CustomBtnGroups from "../../components/common/btn-actions-groups";

interface HeadersStudentsI<T extends {}> {
    children: ({ columns }: { columns: any }) => JSX.Element
    showModalEdit: (item: T) => void
    removeItem: (item: T) => void
}

export const HeadersStudents = <T extends {}>({ children, showModalEdit, removeItem }: HeadersStudentsI<T>) => {

    const columns = [
        {
            title: "Expense",
            render: ({ item }: any) => {
                return (
                    <div className="d-flex flex-column">
                        <h6 className="mb-1 text-dark text-sm">{`${item.name} ${item.lastName}`}</h6>
                        <span className="text-xs">{item.student_code}</span>
                    </div>
                );
            },
        },
        {
            title: "Tutores",
            render: ({ item }: any) => {
                return (
                    <div className="d-flex flex-column">
                        <span className="text-xs"><b>Madre: </b>{item.motherName}</span>
                        <span className="text-xs"><b>Padre: </b>{item.fatherName}</span>
                    </div>
                );
            },
        },
        {
            title: "Fecha de nacimiento",
            render: ({ item }: any) => {
                return (
                    <div className="d-flex flex-column">
                        <span>{new Date(item.birthday).toLocaleDateString()}</span>
                    </div>
                );
            },
        },
        {
            title: "Dirección",
            key: "address"
        },
        {
            title: "Actions",
            render: ({ item }: any) => {
                return (<CustomBtnGroups
                    onEdit={() => { showModalEdit(item) }}
                    onDelete={() => { removeItem(item); }} />);
            },
        },
    ]

    return children({ columns })
}