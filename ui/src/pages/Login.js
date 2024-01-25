import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import { login } from "../features/auth/userSlice";

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    let schema = yup.object().shape({
      email: yup
        .string()
        .email("Email should be valid")
        .required("Email is Required"),
      password: yup.string().required("Password is Required"),
    });
    const formik = useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      validationSchema: schema,
      onSubmit: (values) => {
        dispatch(login(values));
      },
    });
    return (
      <>
        <Meta title={"Login"} />
        <BreadCrumb title={"Login"} />
        <div className="-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="auth-card">
                  <h3>Login</h3>
                  <form
                    className="form"
                    action=""
                    onSubmit={formik.handleSubmit}
                  >
                    <div>
                      <CustomInput
                        type="email"
                        name="email"
                        placeholder="Email"
                        classname="my-2"
                        value={formik.values.email}
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.email && formik.errors.email}
                    </div>
                    <div>
                      <CustomInput
                        type="password"
                        name="password"
                        placeholder="Password"
                        classname="my-2"
                        value={formik.values.password}
                        onChange={formik.handleChange("password")}
                        onBlur={formik.handleBlur("password")}
                      />
                    </div>
                    <div className="error">
                      {formik.touched.password && formik.errors.password}
                    </div>
                    <div>
                      <Link to="/forgot-password">Forgot Password?</Link>

                      <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                        <button className="button" type="submit">
                          Login
                        </button>
                        <Link to="/signup" className="button signup">
                          SignUp
                        </Link>
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

