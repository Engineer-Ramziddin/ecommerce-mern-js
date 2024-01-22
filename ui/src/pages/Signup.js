import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";
import CustomInput from "../components/CustomInput";

const Signup = () => {
    return (
        <>
            <Meta title={"Signup"}/>
            <BreadCrumb title={"Signup"}/>
            <div className="-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="auth-card">
                                 <h3>Sign Up</h3>
                                <form action="">
                                    <div>
                                        <CustomInput
                                            type="name"
                                            name="name"
                                            placeholder="Name"
                                            classname="my-2"
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            classname="my-2"
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="tel"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            classname="my-2"
                                        />
                                    </div>
                                    <div>
                                        <CustomInput
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            classname="my-2"
                                        />
                                    </div>
                                    <div>
                                        <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                                            <button className="button" type="button">Sign Up</button>
                                            <Link to="/Login" className="button signup">Login</Link>
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

export default Signup;
