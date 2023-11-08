import { NextRouter, useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import { UIContext } from "../../../context";
import { AsideOptionsI } from "../../../interfaces/layout/aside.interface";

import Button from "../../common/button";
import { asideOptions } from "../../../settings/aside/aside-opts.settings";

const Aside = () => {
    const router: NextRouter = useRouter()
    const [options, setOptions] = useState<AsideOptionsI[]>([]);

    useEffect(() => { handleSelected(router.pathname) }, [router.pathname]);

    const { showAsideBar } = useContext(UIContext);

    const handleSelected = (path: string) => {
        setOptions(asideOptions?.map((opt, i) => {
            path === opt.link ? opt.active = true : opt.active = false;
            return opt
        }));
    };

    return (
        <React.Fragment>
            <aside className={`sidebar-show ${showAsideBar ? "sidenav" : ""} navbar navbar-vertical navbar-expand-xs border-0 border-radius-xl my-3 fixed-start ms-3 bg-white p-3`} >
                <div
                    className="collapse navbar-collapse h-auto"
                >
                    <ul className="navbar-nav">
                        {options.map((item, index) => (
                            <Button
                                key={index}
                                action={() => { router.push(item.link) }}
                                customClass=""
                                bgClass={item.active ? "warning" : `light`}
                                type={"submit"}
                                loading={false}
                            >
                                {item.title}
                            </Button>
                        ))}
                    </ul>
                </div>
                <div className="sidenav-footer position-absolute w-100 bottom-0 ">
                    <div className="mx-3"></div>
                </div>
            </aside>
        </React.Fragment >
    );
};

export default Aside;
