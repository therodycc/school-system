import { NextRouter, useRouter } from "next/router";
import authProvider from "../../../providers/auth/auth.provider";
import Button from "../../common/button";
import { useDispatch } from "../../../redux-toolkit/store";
import { logout } from "../../../redux-toolkit/slices/auth/auth.actions";

const Header = () => {
    const dispatch = useDispatch();
    const router: NextRouter = useRouter()

    const handleLogout = async () => {
        dispatch(logout(() => {
            const cookies = document.cookie.split(";");

            for (let i = 0; i < cookies.length; i++) {
                const cookie = cookies[i];
                const eqPos = cookie.indexOf("=");
                const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
                document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
            }

            router.push('/auth/sign-in');
        }))
    }

    return (
        <nav
            className="border-radius-xl  blur m-3 p-2 "
        >
            <div
                className="d-flex align-items-center justify-content-end pt-2"
            >
                <Button
                    action={handleLogout}
                    bgClass={"light"}
                    type={"submit"}
                    loading={false}
                >
                    LOGOUT
                </Button>
            </div>
        </nav>
    );
};

export default Header;
