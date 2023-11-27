import router from "next/router";
import { AuthLoginPayload } from "../../../../interfaces/auth/auth.interface";
import { signIn } from "../../../../redux-toolkit/slices/auth/auth.actions";
import { useDispatch, useSelector } from "../../../../redux-toolkit/store";
import inputsAuthRenderSettings, { inputsAuthRenderRules } from "../../../../settings/auth/inputs-auth-render.settings";
import Button from "../../../common/button";
import Form from "../../../common/form";
import { authSelector } from "../../../../redux-toolkit/slices/auth/auth.selector";

const SignIn = () => {
    const dispatch = useDispatch();
    const isLoadingAuth = useSelector(authSelector.isLoading)

    const handleSubmit = async (form: AuthLoginPayload) => {
        dispatch(signIn(form, () => {
            router.push("/");
        }))
    };

    return (
        <>
            <div className="col-lg-12 m-auto">
                <div className="col-lg-4 mx-auto">
                    <div className="card mx-3" style={{ zIndex: 1 }}>
                        <div className="card-body ">
                            <p className="mb-4 text-center">
                                Enter password to unlock your account.
                            </p>

                            <Form
                                dataRules={inputsAuthRenderRules}
                                keyForm="sign-in"
                                inputsData={inputsAuthRenderSettings}
                                handleSubmit={handleSubmit}
                                footerSection={
                                    <>
                                        <Button
                                            bgClass={"warning"}
                                            type={"submit"}
                                            loading={!!isLoadingAuth}
                                            customClass="mt-3 w-100"
                                        >
                                            Log In
                                        </Button>
                                    </>
                                }
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SignIn;
