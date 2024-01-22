import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";
import CustomInput from "../components/CustomInput";

const ForgotPassword = () => {
    return (
        <>
            <Meta title={"Forgot password"}/>
            <BreadCrumb title={"Forgot password"}/>
            <div className="-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3>Reset Your Password</h3>
                                <p className="text-center mt-2 mb-3">
                                    We will sent you an email to reset your password
                                </p>
                                <form className="form" action="">
                                    <div>
                                        <CustomInput
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                        />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button" type="submit">Submit</button>
                                            <Link to="/login" className="button cancel">Cancel</Link>
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

export default ForgotPassword;
