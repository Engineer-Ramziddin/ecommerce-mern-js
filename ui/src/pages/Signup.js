import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";

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
                                        <input
                                            type="name"
                                            name="name"
                                            placeholder="Name"
                                            className="form-control my-2"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="Email"
                                            className="form-control my-2"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            name="mobile"
                                            placeholder="Mobile Number"
                                            className="form-control my-2"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="password"
                                            name="password"
                                            placeholder="Password"
                                            className="form-control my-2"
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
