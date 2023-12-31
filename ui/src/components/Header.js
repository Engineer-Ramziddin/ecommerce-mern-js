import React from 'react'
import {Link} from "react-router-dom";
import {BsSearch} from "react-icons/bs";
import {GoGitCompare} from "react-icons/go";
import {VscAccount} from "react-icons/vsc";
import {SlBasket} from "react-icons/sl";
import {FaRegStar} from "react-icons/fa";

const Header = () => {
    return (<>
            <header className="header-top-strip py-3 text-white">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-6">
                            <p>Free Shipping Over $100 & Free Returns</p>
                        </div>
                        <div className="col-6">
                            <p>Hotline: <a href="tel: +998905554444">+998905554444</a></p>
                        </div>
                    </div>
                </div>
            </header>
            <header className="header-upper py-3">
                <div className="container-xxl">
                    <div className="row align-items-center">
                        <div className="col-2">
                            <h2>
                                <Link className="text-white" to={"about"}>Dev mern</Link>
                            </h2>
                        </div>
                        <div className="col-5">
                            <div className="input-group">
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    placeholder="Recipient's username"
                                    aria-label="Recipient's username"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    <BsSearch className="fs-6"/>
                                </span>
                            </div>
                        </div>
                        <div className="col-5">
                            <div className="header-upper-links d-flex align-items-center justify-content-between">
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <GoGitCompare size={30}/>
                                        <p>Compare<br/> Products</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <FaRegStar size={30}/>
                                        <p>Favorite<br/> wishlist</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                        <VscAccount size={30}/>
                                        <p>Log in<br/> My Account</p>
                                    </Link>
                                </div>
                                <div>
                                    <Link className="d-flex align-items-center gap-10 text-white">
                                            <SlBasket size={30}/>
                                        <div className="d-flex flex-column gap-10">
                                            <span className="badge bg-white text-dark">0</span>
                                            <p className="mb-0">$ 5000</p>
                                        </div>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </>)
}

export default Header