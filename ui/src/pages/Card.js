import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import nout from '../assets/images/nout-1-1.jpg';
import {AiFillDelete} from "react-icons/ai";
import {Link} from "react-router-dom";

const Card = () => {
    return (
        <>
            <Meta title={"Card"}/>
            <BreadCrumb title={"Card"}/>
            <div className="card-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="card-header d-flex justify-content-between align-items-center">
                                <h4 className="card-col-1">Product</h4>
                                <h4 className="card-col-2">Price</h4>
                                <h4 className="card-col-3">Quantity</h4>
                                <h4 className="card-col-4">Total</h4>
                            </div>
                            <div className="card-data py-3 d-flex justify-content-between align-items-center">
                                <div className="card-col-1 gap-15 d-flex align-items-center">
                                    <div className="w-25">
                                        <img className="img-fluid" src={nout} alt="product image"/>
                                    </div>
                                    <div className="w-75">
                                        <p>
                                            Kids headphones bulk 10 pack multi colored for students
                                        </p>
                                        <p>Size: S</p>
                                        <p>Color: #234234</p>
                                    </div>
                                </div>
                                <div className="card-col-2">
                                    <h5 className="price">$ 100</h5>
                                </div>
                                <div className="card-col-3 gap-15 d-flex align-items-center">
                                    <div>
                                        <input
                                            type="number"
                                            name=""
                                            id=""
                                            min="1"
                                            max="10"
                                            className="form-control mx-2"
                                            style={{width: "70px"}}
                                        />
                                    </div>
                                    <div>
                                        <AiFillDelete className="text-danger" size={25}/>
                                    </div>
                                </div>
                                <div className="card-col-4">
                                    <h5 className="price">$ 100</h5>
                                </div>

                            </div>
                        </div>
                        <div className="col-12 py-2 mt-4">
                            <div className="d-flex justify-content-between align-items-center">
                                <Link to="/product" className="button">Continue To Shopping</Link>
                                <div className="d-flex flex-column align-items-end">
                                    <h4>SubTotal: $ 1000</h4>
                                    <p>Taxes and shipping calculate at checkout</p>
                                    <Link to="/checkout" className="button">Checkout</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};
export default Card;
