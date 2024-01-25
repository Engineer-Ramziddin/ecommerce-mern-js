import React from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import CustomInput from "../components/CustomInput";
import { Link, useNavigate } from "react-router-dom";
import * as yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth/userSlice";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let schema = yup.object().shape({
    firstname: yup.string().required("First Name is Required"),
    lastname: yup.string().required("Last Name is Required"),
    email: yup
      .string()
      .email("Email should be valid")
      .required("Email is Required"),
    mobile: yup.string().required("Mobile is Required"),
    password: yup.string().required("Password is Required"),
  });
  const formik = useFormik({
    initialValues: {
      firstname: "",
      lastname: "",
      email: "",
      mobile: "",
      password: "",
    },
    validationSchema: schema,
    onSubmit: (values) => {
      dispatch(register(values));
    },
  });

  return (
    <>
      <Meta title={"Signup"} />
      <BreadCrumb title={"Signup"} />
      <div className="-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            <div className="col-12">
              <div className="auth-card">
                <h3>Sign Up</h3>
                <form action="" onSubmit={formik.handleSubmit}>
                  <div>
                    <CustomInput
                      type="text"
                      name="firstname"
                      placeholder="Frist Name"
                      classname="my-2"
                      value={formik.values.firstname}
                      onChange={formik.handleChange("firstname")}
                      onBlur={formik.handleBlur("firstname")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.firstname && formik.errors.firstname}
                  </div>

                  <div>
                    <CustomInput
                      type="text"
                      name="lastname"
                      placeholder="Last Name"
                      classname="my-2"
                      value={formik.values.lastname}
                      onChange={formik.handleChange("lastname")}
                      onBlur={formik.handleBlur("lastname")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.lastname && formik.errors.lastname}
                  </div>

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
                      type="tel"
                      name="mobile"
                      placeholder="Mobile Number"
                      classname="my-2"
                      value={formik.values.mobile}
                      onChange={formik.handleChange("mobile")}
                      onBlur={formik.handleBlur("mobile")}
                    />
                  </div>
                  <div className="error">
                    {formik.touched.mobile && formik.errors.mobile}
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
                    <div className="d-flex justify-content-center gap-15 align-items-center mt-3">
                      <button className="button" type="submit">
                        Sign Up
                      </button>
                      <Link to="/Login" className="button signup">
                        Login
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

export default Signup;
