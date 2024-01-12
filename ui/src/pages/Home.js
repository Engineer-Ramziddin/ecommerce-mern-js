import React from 'react'
import {Link} from "react-router-dom";
import {FaRegCreditCard, FaTruck} from "react-icons/fa";
import {GoGift} from "react-icons/go";
import {TfiHeadphoneAlt} from "react-icons/tfi";
import {AiOutlinePercentage} from "react-icons/ai";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";

const Home = () => {
    return (
        <>
            <section className="home-wrapper-1 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-banner position-relative">
                                <img
                                    className="ipad img-fluid rounded-3"
                                    src={require("../assets/images/ipad-1-1.jpg")}
                                    alt="main-banner"
                                />
                                <div className="main-banner-content position-absolute text-white">
                                    <h4>SUPERCHARGED FOR PROS.</h4>
                                    <h5>iPad S13+ Pro</h5>
                                    <p>From $999.00 or $41.62/mon.</p>
                                    <Link className="button">BUY NOW</Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
                                <div className="small-banner position-relative">
                                    <img
                                        className="img-fluid rounded-3"
                                        src={require('assets/images/nout-1-1.jpg')}
                                        alt="small-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>SUPERCHARGED FOR PROS.</h4>
                                        <h5>iPad S13+ Pro</h5>
                                        <p>From $999.00 or <br/> $41.62/mon.</p>
                                    </div>
                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        className="img-fluid rounded-3"
                                        src={require('assets/images/nout-1-1.jpg')}
                                        alt="small-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>SUPERCHARGED FOR PROS.</h4>
                                        <h5>iPad S13+ Pro</h5>
                                        <p>From $999.00 or <br/> $41.62/mon.</p>
                                    </div>

                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        className="img-fluid rounded-3"
                                        src={require('assets/images/nout-1-1.jpg')}
                                        alt="small-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>SUPERCHARGED FOR PROS.</h4>
                                        <h5>iPad S13+ Pro</h5>
                                        <p>From $999.00 or <br/> $41.62/mon.</p>
                                    </div>

                                </div>
                                <div className="small-banner position-relative">
                                    <img
                                        className="img-fluid rounded-3"
                                        src={require('assets/images/nout-1-1.jpg')}
                                        alt="small-banner"
                                    />
                                    <div className="small-banner-content position-absolute">
                                        <h4>SUPERCHARGED FOR PROS.</h4>
                                        <h5>iPad S13+ Pro</h5>
                                        <p>From $999.00 or <br/> $41.62/mon.</p>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="servies d-flex align-items-center justify-content-between gap-30">
                                <div className="d-flex align-items-center  gap-20">
                                    <FaTruck size={28}/>
                                    <div>
                                        <h6>Free Shipping</h6>
                                        <p>From all orders over $100</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <GoGift size={28}/>
                                    <div>
                                        <h6>Daily Surprice Offers</h6>
                                        <p>Save up to 25% of</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <TfiHeadphoneAlt size={28}/>
                                    <div>
                                        <h6>Support 24/7</h6>
                                        <p>Shop with an expert</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <AiOutlinePercentage size={28}/>
                                    <div>
                                        <h6>Affordable Prices</h6>
                                        <p>Get Factory direct price</p>
                                    </div>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <FaRegCreditCard size={28}/>
                                    <div>
                                        <h6>Secure Payments</h6>
                                        <p>100% Protected Payments</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="categories d-flex align-items-center justify-content-between flex-wrap">
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Music & Gaming</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Cameras</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Smart TV</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>
                                </div>
                                <div className="d-flex align-items-center  gap-20">
                                    <div>
                                        <h6>Smart Watches</h6>
                                        <p>10 items</p>
                                    </div>
                                    <img src="https://pngimg.com/d/photo_camera_PNG7829.png" width={130} alt=""/>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="featured-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>Featured Collection</h3>
                            </div>
                        </div>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </section>
            <section className="famous-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <div className="famous-img-wrapper bg-dark">
                                    <img className="img-fluid" src={require('assets/images/Smart Watch.png')} alt=""/>
                                </div>
                                <div className="famous-content position-absolute text-white">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch</h6>
                                    <p>From $399 or $16.62/mo for month</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <div className="famous-img-wrapper bg-white">
                                    <img className="img-fluid" src={require('assets/images/Smart Watch.png')} alt=""/>
                                </div>
                                <div className="famous-content position-absolute">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch</h6>
                                    <p>From $399 or $16.62/mo for month</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <div className="famous-img-wrapper bg-white">
                                    <img className="img-fluid" src={require('assets/images/Smart Watch.png')} alt=""/>
                                </div>
                                <div className="famous-content position-absolute">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch</h6>
                                    <p>From $399 or $16.62/mo for month</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <div className="famous-card position-relative">
                                <div className="famous-img-wrapper bg-white">
                                    <img className="img-fluid" src={require('assets/images/Smart Watch.png')} alt=""/>
                                </div>
                                <div className="famous-content position-absolute">
                                    <h5>Big Screen</h5>
                                    <h6>Smart Watch</h6>
                                    <p>From $399 or $16.62/mo for month</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="special-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Special Products</h3>
                        </div>
                        <div className="row">
                            <SpecialProduct/>
                            <SpecialProduct/>
                            <SpecialProduct/>
                            <SpecialProduct/>
                            <SpecialProduct/>
                            <SpecialProduct/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="popular-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <h3>Our Popular Products</h3>
                        </div>
                        <div className="row">
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                            <ProductCard/>
                        </div>
                    </div>
                </div>
            </section>
            <section className="marque-wrapper py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="marquee-inner-wrapper card-wrapper">
                                <Marquee className="d-flex">
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/lenovo.png')} alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/ibm.png')} alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/acer.jpg')} alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/asus.jpg')} alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/dell.jpg')} alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/apple.jpg')} alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/hp.jpg')} alt="brand"/>
                                    </div>
                                    <div className="mx-4 w-25">
                                        <img width={140} src={require('assets/brand/samsung.jpg')} alt="brand"/>
                                    </div>
                                </Marquee>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="blog-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="section-heading">
                                <h3>Our lastest blogs</h3>
                            </div>
                        </div>
                        <div className="col-3 ">
                            <BlogCard></BlogCard>
                        </div>
                        <div className="col-3">
                            <BlogCard></BlogCard>
                        </div>
                        <div className="col-3">
                            <BlogCard></BlogCard>
                        </div>
                        <div className="col-3">
                            <BlogCard></BlogCard>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Home