import React from 'react';
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {RxCross1} from "react-icons/rx";

const Wishlist = () => {
    return (
        <>
            <Meta title={"Wishlist"}/>
            <BreadCrumb title={"Wishlist"}/>
            <div className="wishlist-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <RxCross1 className="position-absolute cross img-fluid" size={35}/>
                                <div className="wishlist-card-image">
                                    <img src="https://m.media-amazon.com/images/I/71ulah9iIwL._AC_SL1500_.jpg"
                                         alt="image"/>
                                </div>
                                <h5 className="title">
                                    Apple Watch Series 8 [GPS 41mm] Smart Watch w/Midnight Aluminum Case with
                                    Midnight Sport Band - M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On
                                    Retina Display, Water Resistant
                                </h5>
                                <h6 className="price">
                                    $364.89
                                </h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <RxCross1 className="position-absolute cross img-fluid" size={35}/>
                                <div className="wishlist-card-image">
                                    <img src="https://m.media-amazon.com/images/I/71ulah9iIwL._AC_SL1500_.jpg"
                                         alt="image"/>
                                </div>
                                <h5 className="title">
                                    Apple Watch Series 8 [GPS 41mm] Smart Watch w/Midnight Aluminum Case with
                                    Midnight Sport Band - M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On
                                    Retina Display, Water Resistant
                                </h5>
                                <h6 className="price">
                                    $364.89
                                </h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <RxCross1 className="position-absolute cross img-fluid" size={35}/>
                                <div className="wishlist-card-image">
                                    <img src="https://m.media-amazon.com/images/I/71ulah9iIwL._AC_SL1500_.jpg"
                                         alt="image"/>
                                </div>
                                <h5 className="title">
                                    Apple Watch Series 8 [GPS 41mm] Smart Watch w/Midnight Aluminum Case with
                                    Midnight Sport Band - M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On
                                    Retina Display, Water Resistant
                                </h5>
                                <h6 className="price">
                                    $364.89
                                </h6>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="wishlist-card position-relative">
                                <RxCross1 className="position-absolute cross img-fluid" size={35}/>
                                <div className="wishlist-card-image">
                                    <img src="https://m.media-amazon.com/images/I/71ulah9iIwL._AC_SL1500_.jpg"
                                         alt="image"/>
                                </div>
                                <h5 className="title">
                                    Apple Watch Series 8 [GPS 41mm] Smart Watch w/Midnight Aluminum Case with
                                    Midnight Sport Band - M/L. Fitness Tracker, Blood Oxygen & ECG Apps, Always-On
                                    Retina Display, Water Resistant
                                </h5>
                                <h6 className="price">
                                    $364.89
                                </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Wishlist;
