import { FC } from "react";
import { LayoutPropsI } from "../../interfaces/layout/layout.interface";

const AuthLayout: FC<LayoutPropsI> = ({ children }) => {
    return (
        <>
            <div className="overflow-hidden" style={{ height: "100vh" }}>
                <div className="col-lg-12 d-flex align-items-center justify-content-center h-75">{children}</div>
                <svg
                    className="position-fixed bottom-0 m-0 p-0 me-0"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="#fb8c00"
                        fillOpacity=".2"
                        d="M0,0L0,32L57.6,32L57.6,96L115.2,96L115.2,160L172.8,160L172.8,32L230.4,32L230.4,64L288,64L288,288L345.6,288L345.6,192L403.2,192L403.2,0L460.8,0L460.8,96L518.4,96L518.4,288L576,288L576,32L633.6,32L633.6,96L691.2,96L691.2,320L748.8,320L748.8,224L806.4,224L806.4,192L864,192L864,192L921.6,192L921.6,96L979.2,96L979.2,64L1036.8,64L1036.8,224L1094.4,224L1094.4,96L1152,96L1152,128L1209.6,128L1209.6,288L1267.2,288L1267.2,192L1324.8,192L1324.8,256L1382.4,256L1382.4,32L1440,32L1440,320L1382.4,320L1382.4,320L1324.8,320L1324.8,320L1267.2,320L1267.2,320L1209.6,320L1209.6,320L1152,320L1152,320L1094.4,320L1094.4,320L1036.8,320L1036.8,320L979.2,320L979.2,320L921.6,320L921.6,320L864,320L864,320L806.4,320L806.4,320L748.8,320L748.8,320L691.2,320L691.2,320L633.6,320L633.6,320L576,320L576,320L518.4,320L518.4,320L460.8,320L460.8,320L403.2,320L403.2,320L345.6,320L345.6,320L288,320L288,320L230.4,320L230.4,320L172.8,320L172.8,320L115.2,320L115.2,320L57.6,320L57.6,320L0,320L0,320Z"
                    ></path>
                </svg>
            </div>
        </>
    );
};

export default AuthLayout;
