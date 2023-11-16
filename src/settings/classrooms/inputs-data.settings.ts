import { InputPropsI } from "../../interfaces/common/input/input.interface"
import { TeacherI } from "../../interfaces/teacher/teacher.interface"

interface EntriesDataI {
    form: any
    actions?: {
        [key: string]: Function | string | boolean | Array<any> | number | any;
    };
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

const defaultValue = { value: undefined, title: "Seleccionar profesor" }

export const inputsDataTeacherToClassroom = ({ form, actions }: EntriesDataI): InputPropsI[] => {
    return [
        {
            title: "",
            cols: "col-lg-12",
            options: [defaultValue, ...actions?.teachers?.map((teacher: TeacherI) => ({ value: teacher?.id, title: `${teacher?.name} ${teacher?.lastName}` }))],
            props: {
                type: "dropdown",
                name: "teacherId",
                value: form?.teacherId,
            },
        },
    ]
}
