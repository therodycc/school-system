import { NextRouter, useRouter } from "next/router";
import authProvider from "../../../providers/auth/auth.provider";
import Button from "../../common/button";

const Header = () => {

    const router: NextRouter = useRouter()

    const logout = async () => {
        await authProvider.logout();
        const cookies = document.cookie.split(";");

        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i];
            const eqPos = cookie.indexOf("=");
            const name = eqPos > -1 ? cookie.substring(0, eqPos) : cookie;
            document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
        }

        router.reload();
    }

    return (
        <nav
            className="border-radius-xl  blur m-3 p-2 "
        >
            <div
                className="d-flex align-items-center justify-content-end pt-2"
            >
                <Button
                    action={logout}
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
