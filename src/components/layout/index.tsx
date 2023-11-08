import { FC, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { LayoutPropsI } from '../../interfaces/layout/layout.interface';
import userProvider from '../../providers/user/user.provider';
import { getMeAction } from '../../redux-toolkit/slices/me.slice';
import Aside from "./aside/Index";
import Header from "./header/Index";

const Layout: FC<LayoutPropsI> = ({ children }) => {
    const dispatch = useDispatch()

    const getMe = useCallback(async () => {
        const res = await userProvider.getMe()
        if (res?.error) return console.log(res)
        dispatch(getMeAction({ me: res?.data }));
    }, [dispatch])

    useEffect(() => { getMe() }, [getMe]);

    return (
        <>
            <div className="g-sidenav-show bg-light ">
                <Aside />
                <main className="main-content position-relative  border-radius-lg bg-light d-flex flex-column overflow-scroll" style={{ height: "100vh" }}>
                    <Header />
                    <div className="container-fluid py-4" style={{ flex: "1 1 auto" }}>
                        {children}
                    </div>
                </main>
            </div>
        </>
    )
}

export default Layout