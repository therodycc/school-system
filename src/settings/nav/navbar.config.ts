import { faArrowLeft, faArrowsUpDown, faBell, faCog, faLanguage, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { NextRouter } from 'next/router';
interface NavOptionsI {
    icon: IconDefinition,
    active: boolean,
    action: Function
    show: boolean,
}

export const navOptionsRenders = ({ router, showBackButton }: { router: NextRouter, showBackButton: boolean }): NavOptionsI[] => {
    return [
        {
            icon: faArrowLeft,
            active: false,
            show: showBackButton,
            action: () => { router.back() }
        },
    ]
}


export const navAuth = [
    {
        title: "Sign In",
        href: "/auth/sign-in",
        icon: "home",
        active: true,
    },
    {
        title: "Sign Up",
        href: "/auth/sign-up",
        icon: "home",
        active: false
    },
]