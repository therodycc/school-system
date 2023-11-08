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
]