import { InputPropsI } from "../../interfaces/common/input/input.interface"

interface EntriesDataI {
    form: any
}

export const inputsDataStudent = ({ form }: EntriesDataI): InputPropsI[] => {
    return [
        {
            title: "Nombre",
            cols: "col-lg-4",
            props: {
                type: "text",
                name: "name",
                value: form?.name,
                placeholder: "Ej. Matias",
            }
        },
        {
            title: "Apellido",
            cols: "col-lg-4",
            props: {
                type: "text",
                name: "lastName",
                value: form?.lastName,
                placeholder: "Ej. Castillo",
            }
        },
        // birthday
        {
            title: "Matricula",
            cols: "col-lg-4",
            props: {
                type: "text",
                name: "studentCode",
                value: form?.studentCode,
                placeholder: "Ej. AW-500",
            }
        },
        {
            title: "Nombre de la madre",
            cols: "col-lg-6",
            props: {
                type: "text",
                name: "motherName",
                value: form?.motherName,
                placeholder: "Ej. Matilda Aguilar",
            }
        },
        {
            title: "Nombre del padre",
            cols: "col-lg-6",
            props: {
                type: "text",
                name: "fatherName",
                value: form?.fatherName,
                placeholder: "Ej. Lucas Castillo",
            }
        },
        {
            title: "Dirección",
            cols: "col-lg-12",
            props: {
                type: "text",
                name: "address",
                value: form?.address,
                placeholder: "Ej. C/ Juan Pablo Duarte, alto 40",
            }
        },
    ]
}
