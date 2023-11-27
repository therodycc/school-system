import { InputPropsI } from "../../interfaces/common/input/input.interface"

interface EntriesDataI {
    form: any
}

export const inputsDataTeacher = ({ form }: EntriesDataI): InputPropsI[] => {
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
            title: "Profesión",
            cols: "col-lg-4",
            props: {
                type: "text",
                name: "profession",
                value: form?.profession,
                placeholder: "Ej. Maestro en Pedagogía Terapéutica",
            }
        },
        {
            title: "Correo Electronico",
            cols: "col-lg-12",
            props: {
                type: "text",
                name: "email",
                value: form?.email,
                placeholder: "Ej. juanvargars@gmail.com",
            }
        }
    ]
}


export const inputsHeadersTeacherRules = () => {
    return {
        name: {
            isRequired: { message: "Requerido" },
        },
        lastName: {
            isRequired: { message: "Requerido" },
        },
        profession: {
            isRequired: { message: "Requerido" },
        },
        email: {
            isRequired: { message: "Requerido" },
            isEmailValid: { message: "Correo invalido" },
        }
    }
}