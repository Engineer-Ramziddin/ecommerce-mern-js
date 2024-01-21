import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";

const ResetPassword = () => {
    return (
        <>
            <Meta title={"Reset password"}/>
            <BreadCrumb title={"Reset password"}/>
            <div className="-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                <h3>Reset Password</h3>
                                <form className="form" action="">
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="form-control my-2"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="confpassword"
                                            placeholder="Confirm Password"
                                            className="form-control my-2"
                                        />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button" type="submit">Submit</button>
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

export default ResetPassword;
