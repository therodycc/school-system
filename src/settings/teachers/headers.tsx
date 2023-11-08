import Image from "next/image";
import CustomBtnGroups from "../../components/common/btn-actions-groups";

interface HeadersTeacherI<T extends {}> {
    children: ({ columns }: { columns: any }) => JSX.Element
    showModalEdit: (item: T) => void
    removeItem: (item: T) => void
}

export const HeadersTeachers = <T extends {}>({ children, showModalEdit, removeItem }: HeadersTeacherI<T>) => {

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
            render: ({ item }: { item: T }) => {
                return (<CustomBtnGroups
                    onEdit={() => { showModalEdit(item) }}
                    onDelete={() => { removeItem(item); }} />);
            },
        },
    ]

    return children({ columns })
}