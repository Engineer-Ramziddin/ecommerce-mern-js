import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";
import CustomInput from "../components/CustomInput";

const Login = () => {
    return (
        <>
            <Meta title={"Login"}/>
            <BreadCrumb title={"Login"}/>
            <div className="-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3>Login</h3>
                                <form className="form" action="">
                                    <div>
                                        <CustomInput
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                        />
                                    </div>
                                    <div>
                                        <Link to="/forgot-password">Forgot Password?</Link>

                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button">Login</button>
                                            <Link to="/signup" className="button signup">SignUp</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;

