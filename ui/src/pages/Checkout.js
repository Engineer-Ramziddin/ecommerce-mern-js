import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";
import {BiArrowBack} from "react-icons/bi";
import nout from "../assets/images/nout.jpg";
const Checkout = () => {
    return (
        <>
            <Meta title={"Checkout"}/>
            <BreadCrumb title={"Checkout"}/>
            <div className="checkout-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-7">
                            <div className="checkout-left-data">
                                <h3 className="website-name">Shopping</h3>
                                <nav style={{'--bs-breadcrumb-divider': '>'}} aria-label="breadcrumb">
                                    <ol className="breadcrumb">
                                        <li className="breadcrumb-item total-price">
                                            <Link className="text-dark" to="/card">Card</Link>
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">
                                            Information
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active total-price">
                                            Shipping
                                        </li>
                                        &nbsp; /
                                        <li className="breadcrumb-item active total-price" aria-current="page">
                                            Payment
                                        </li>
                                    </ol>
                                </nav>
                                <h4 className="title">Contact Information</h4>
                                <p>User Name (user@gmail.com)</p>
                                <h4 className="mb-3">Shipping Address</h4>
                                <form action="" className="d-flex flex-wrap justify-content-between gap-15">
                                    <div className="w-100">
                                        <select
                                            name=""
                                            className="form-control form-select"
                                            id=""
                                        >
                                            <option value="" selected disabled="">Select Country</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Frist Name" className="form-control"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Last Name" className="form-control"/>
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Address" className="form-control"/>
                                    </div>
                                    <div className="w-100">
                                        <input type="text" placeholder="Apartment, Sui, etc" className="form-control"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="City" className="form-control"/>
                                    </div>
                                    <div className="flex-grow-1">
                                        <select
                                            name=""
                                            className="form-control form-select"
                                            id=""
                                        >
                                            <option value="" selected disabled="">Select State</option>
                                        </select>
                                    </div>
                                    <div className="flex-grow-1">
                                        <input type="text" placeholder="Zipcode" className="form-control"/>
                                    </div>
                                    <div className="w-100">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <Link to="/card" className="d-flex align-items-center"><BiArrowBack
                                                className="me-2" size={25}/> Return to Card</Link>
                                            <Link to="/card" className="button">Continue to Shipping</Link>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="border-bottom py-4">
                                <div className="d-flex gap-10 mb-2 align-items-center">
                                   <div className="w-75 d-flex gap-10">
                                       <div className="w-25 position-relative d-flex">
                                           <span style={{top: "-20px", right: "-20px"}} className="badge rounded-circle p-3 bg-warning position-absolute">1</span>
                                           <img className="img-fluid checkout-img" src={nout} alt="Product image"/>
                                       </div>
                                       <div className="py-4">
                                           <h5 className="mb-0 total-price">
                                               Kids headphones bulk 10 pack
                                           </h5>
                                           <p className="mb-0 total-price"> s #hvwoiehviwehov</p>
                                       </div>
                                   </div>
                                    <div className="flex-grow-1">
                                        <h5>$ 100</h5>
                                    </div>
                                </div>
                            </div>
                            <div className="border-bottom py-4">
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">SubTotal: </p>
                                    <p className="mb-0 total-price">$ 10000</p>
                                </div>
                                <div className="d-flex justify-content-between align-items-center">
                                    <p className="mb-0 total">Shipping: </p>
                                    <p className="mb-0 total-price">$ 10000</p>
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center border-bottom py-4">
                                <h4 className="mb-0 total">Total: </h4>
                                <h5 className="mb-0 total-price">$ 10000</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Checkout;
