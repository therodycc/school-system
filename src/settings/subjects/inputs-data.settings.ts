import { InputPropsI } from "../../interfaces/common/input/input.interface"

interface EntriesDataI {
    form: any
}

export const inputsDataSubjects = ({ form }: EntriesDataI): InputPropsI[] => {
    return [
        {
            title: "Nombre",
            cols: "col-lg-12",
            props: {
                type: "text",
                name: "name",
                value: form?.name,
                placeholder: "Ej. Matematicas",
            }
        },
    ]
}

export const inputsHeadersSubjectsRules = () => {
    return {
        name: {
            isRequired: { message: "Requerido" },
        },
    }
}