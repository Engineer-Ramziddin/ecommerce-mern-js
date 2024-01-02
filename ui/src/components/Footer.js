import React from 'react'
import {TbBrandTelegram} from "react-icons/tb";
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <>
            <footer className="py-4 ">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-5 d-flex align-items-center">
                            <div className="footer-top-data d-flex gap-15 align-items-center text-white">
                                <TbBrandTelegram size={25}/>
                                <h5 className="mb-0 text-white">Sign Up for Newsletter</h5>
                            </div>
                        </div>
                        <div className="col-7">
                            <div className="input-group ">
                                <input
                                    type="text"
                                    className="form-control py-3"
                                    placeholder="Subscribe email"
                                    aria-label="Subscribe email"
                                    aria-describedby="basic-addon2"
                                />
                                <span className="input-group-text p-3" id="basic-addon2">
                                    Subscribe
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div></div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to="" className="text-white py-2 mb-1">Laptops</Link>
                                <Link to="" className="text-white py-2 mb-1">Headphones</Link>
                                <Link to="" className="text-white py-2 mb-1">Tables</Link>
                                <Link to="" className="text-white py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to="" className="text-white py-2 mb-1">Account</Link>
                                <Link to="" className="text-white py-2 mb-1">About Us</Link>
                                <Link to="" className="text-white py-2 mb-1">Faq</Link>
                                <Link to="" className="text-white py-2 mb-1">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to="" className="text-white py-2 mb-1">Laptops</Link>
                                <Link to="" className="text-white py-2 mb-1">Headphones</Link>
                                <Link to="" className="text-white py-2 mb-1">Tables</Link>
                                <Link to="" className="text-white py-2 mb-1">Watch</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-4">
                <div className="container-xxl">
                    <div className="col-12">
                        <p className="text-center mb-0 text-white">&copy; {new Date().getFullYear()} Powered by
                            Ramziddin</p>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer