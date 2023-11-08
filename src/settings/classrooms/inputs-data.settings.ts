import { InputPropsI } from "../../interfaces/common/input/input.interface"

interface EntriesDataI {
    form: any
}

export const inputsDataClassrooms = ({ form }: EntriesDataI): InputPropsI[] => {
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
            title: "Capacidad",
            cols: "col-lg-4",
            props: {
                type: "number",
                name: "capacity",
                value: form?.capacity,
                placeholder: "Ej. 40",
            }
        },
        {
            title: "Ubicación",
            cols: "col-lg-4",
            props: {
                type: "text",
                name: "location",
                value: form?.location,
                placeholder: "Ej. Building 3, Floor 3",
            }
        },
    ]
}