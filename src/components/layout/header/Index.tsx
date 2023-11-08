import Button from "../../common/button";

const Header = () => {
    return (
        <nav
            className="border-radius-xl  blur m-3 p-2 "
        >
            <div
                className="d-flex align-items-center justify-content-end pt-2"
            >
                <Button
                    action={() => { }}
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
