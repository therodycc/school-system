import { faHome, faHouseFire } from '@fortawesome/free-solid-svg-icons';
import { AsideOptionsI } from "../../interfaces/layout/aside.interface";

export const asideOptions: AsideOptionsI[] = [
    {
        icon: faHome,
        title: "Dashboard",
        active: true,
        link: "/",
    },
    {
        icon: faHouseFire,
        title: "Estudiantes",
        active: false,
        link: "/students",
    },
    {
        icon: faHouseFire,
        title: "Profesores",
        active: false,
        link: "/teachers",
    },
    {
        icon: faHouseFire,
        title: "Aulas",
        active: false,
        link: "/classrooms",
    },
    {
        icon: faHouseFire,
        title: "Materias",
        active: false,
        link: "/subjects",
    },
]