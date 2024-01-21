import React from 'react'
import {TbBrandTelegram} from "react-icons/tb";
import {Link} from "react-router-dom";
import {BsGithub, BsInstagram, BsLinkedin, BsYoutube} from "react-icons/bs";

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
                            <div>
                                <address className="text-white fs-6">
                                    Hno: 227 Near Vill chopal, <br/> Sonipat, Naryana <br/>
                                    Pin Code: 131103
                                </address>
                                <a href="tel: +998902229999" className="mt-3 d-block mb-1 text-white">
                                    +998902229999
                                </a>
                                <a href="mailto:demo@gmail.com"
                                   className="mt-2 d-block mb-0 text-white">
                                    demo@gmail.com
                                </a>
                                <div className="social_icons d-flex align-items-center gap-30 mt-4">
                                    <a href="" className="text-white">
                                        <BsLinkedin/>
                                    </a>
                                    <a href="" className="text-white">
                                        <BsInstagram/>
                                    </a>
                                    <a href="" className="text-white">
                                        <BsGithub/>
                                    </a>
                                    <a href="" className="text-white">
                                        <BsYoutube/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-links d-flex flex-column">
                                <Link to="privacy-policy" className="text-white py-2 mb-1">Privacy Policy</Link>
                                <Link to="shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
                                <Link to="refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
                                <Link to="term-and-contions" className="text-white py-2 mb-1">Term And Contions</Link>
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