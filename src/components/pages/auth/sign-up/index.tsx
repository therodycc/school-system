import Button from '../../../common/button'

const SignUp = () => {

    const handleSubmit = () => { }

    return (
        <>
            <div className="col-lg-12 m-auto">
                <div className="col-lg-4 mx-auto">
                    <div className="card mx-3" style={{ zIndex: 1 }}>
                        <div className="card-body ">
                            <p className="mb-4 text-center">Do you want to be part of us?</p>
                            <form onSubmit={handleSubmit}>

                                <div>
                                    <Button
                                        bgClass={"primary"}
                                        type={"submit"}
                                        customClass="mt-3 w-100"
                                        loading={false}
                                    >
                                        Sign up
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}

export default SignUp