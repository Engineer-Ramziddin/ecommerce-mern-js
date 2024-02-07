import React from 'react'
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {AiOutlineHome, AiOutlineMail} from "react-icons/ai";
import {BiInfoCircle, BiPhoneCall} from "react-icons/bi";
import * as yup from "yup";
import { useFormik } from "formik";
import CustomInput from '../components/CustomInput';
import { useDispatch } from "react-redux";
import { postContact } from '../features/contact/contactSlice';
function Contact() {
  const dispatch = useDispatch();

     const formik = useFormik({
       initialValues: {
         name: "",
         email: "",
         mobile: "",
         comment: "",
       },
       onSubmit: (values) => {
         dispatch(postContact(values));
       },
     });
    return (
      <>
        <Meta title={"Contact"} />
        <BreadCrumb title={"Contact"} />
        <div className="conatact-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div style={{ width: "100%" }}>
                  <iframe
                    title="Google Map"
                    width="100%"
                    height="600"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  ></iframe>
                </div>
              </div>
              <div className="col-12 mt-5">
                <div className="contact-inner-wrapper d-flex justify-content-between">
                  <div>
                    <h3 className="contact-title">Contact</h3>
                    <form
                      className="d-flex flex-column gap-15"
                      action=""
                      method="post"
                      onSubmit={formik.handleSubmit}
                    >
                      <div>
                        <CustomInput
                          type="text"
                          className="form-control"
                          placeholder="Name"
                          value={formik.values.name}
                          onChange={formik.handleChange("name")}
                          onBlur={formik.handleBlur("name")}
                        />
                      </div>
                      <div>
                        <CustomInput
                          type="email"
                          className="form-control"
                          placeholder="Email"
                          value={formik.values.email}
                          onChange={formik.handleChange("email")}
                          onBlur={formik.handleBlur("email")}
                        />
                      </div>
                      <div>
                        <CustomInput
                          type="tel"
                          className="form-control"
                          placeholder="Mobile Number"
                          value={formik.values.mobile}
                          onChange={formik.handleChange("mobile")}
                          onBlur={formik.handleBlur("mobile")}
                        />
                      </div>
                      <div>
                        <textarea
                          name=""
                          id=""
                          className="w-100 form-control"
                          cols="30"
                          rows="10"
                          placeholder="Comments"
                          value={formik.values.comment}
                          onChange={formik.handleChange("comment")}
                          onBlur={formik.handleBlur("comment")}
                        ></textarea>
                      </div>
                      <div>
                        <button
                          className="button send-button border-0 mt-3"
                          type="submit"
                        >
                          Send
                        </button>
                      </div>
                    </form>
                  </div>
                  <div>
                    <h3 className="contact-title">Get touch with us</h3>
                    <div>
                      <ul className="ps-0">
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineHome size={27} />
                          <address className="mb-0">
                            MyShop, Palo Alto, California, 94301
                          </address>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiPhoneCall size={27} />
                          <a href="tel:+470325813794">+470325813794</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <AiOutlineMail size={27} />
                          <a href="mailto:myshop@gmail.com">myshop@gmail.com</a>
                        </li>
                        <li className="mb-3 d-flex gap-15 align-items-center">
                          <BiInfoCircle size={27} />
                          <p className="mb-0">Monday - Friday, 9:00 - 18:00</p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
}

export default Contact