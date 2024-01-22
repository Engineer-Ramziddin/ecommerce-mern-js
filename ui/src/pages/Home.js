import React from 'react'
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from "../components/BlogCard";
import ProductCard from "../components/ProductCard";
import SpecialProduct from "../components/SpecialProduct";
import mainbanner1 from "../assets/images/main-banner-1.jpg";
import catbanner1 from "../assets/images/catbanner-01.jpg";
import catbanner2 from "../assets/images/catbanner-02.jpg";
import catbanner3 from "../assets/images/catbanner-03.jpg";
import catbanner4 from "../assets/images/catbanner-04.jpg";
import phone from "../assets/images/phone.webp";
import retina from "../assets/images/retina.webp";
import smart from "../assets/images/Smart Watch.png";
import lenovo from "../assets/brand/lenovo.png"
import ibm from "../assets/brand/ibm.png"
import acer from "../assets/brand/acer.jpg"
import asus from "../assets/brand/asus.jpg"
import dell from "../assets/brand/dell.jpg"
import apple from "../assets/brand/apple.jpg"
import hp from "../assets/brand/hp.jpg"
import samsung from "../assets/brand/samsung.jpg"
import Container from "../components/Container";
import {services} from "../utils/Data"

const Home = () => {
    return (
        <>
            <Container class1="home-wrapper-1 py-5">
                <div className="row">
                    <div className="col-6">
                        <div className="main-banner position-relative">
                            <img
                                className="ipad img-fluid rounded-3"
                                src={mainbanner1}
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
                                    src={catbanner1}
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
                                    src={catbanner2}
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
                                    src={catbanner3}
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
                                    src={catbanner4}
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
            </Container>
            <Container class1="home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="servies d-flex align-items-center justify-content-between gap-30">
                            {
                                services?.map((i, j) => {
                                    return (
                                        <div className="d-flex align-items-center  gap-20" key={j}>
                                            {i.image}
                                            <div>
                                                <h6>{i.title}</h6>
                                                <p>{i.tagline}</p>
                                            </div>
                                        </div>
                                    );
                                })
                            }
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="home-wrapper-2 py-5">
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
            </Container>
            <Container class1="featured-wrapper home-wrapper-2 py-5">
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
            </Container>
            <Container class1="famous-wrapper home-wrapper-2 py-5">
                <div className="row">
                    <div className="col-3">
                        <div className="famous-card position-relative">
                            <div className="famous-img-wrapper bg-dark">
                                <img className="img-fluid" src={smart} alt=""/>
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
                                <img className="img-fluid" src={retina} alt=""/>
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
                                <img className="img-fluid" src={phone} alt=""/>
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
                                <img className="img-fluid" src={phone} alt=""/>
                            </div>
                            <div className="famous-content position-absolute">
                                <h5>Big Screen</h5>
                                <h6>Smart Watch</h6>
                                <p>From $399 or $16.62/mo for month</p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
            <Container class1="special-wrapper home-wrapper-2 py-5">
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
            </Container>
            <Container class1="popular-wrapper home-wrapper-2 py-5">
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
            </Container>
            <Container class1="marque-wrapper py-5">
                <div className="row">
                    <div className="col-12">
                        <div className="marquee-inner-wrapper card-wrapper">
                            <Marquee className="d-flex">
                                <div className="mx-4 w-25">
                                    <img width={140} src={lenovo} alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img width={140} src={ibm} alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img width={140} src={acer} alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img width={140} src={asus} alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img width={140} src={dell} alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img width={140} src={apple} alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img width={140} src={hp} alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img width={140} src={samsung} alt="brand"/>
                                </div>
                            </Marquee>
                        </div>
                    </div>
                </div>
            </Container>
            <Container className="blog-wrapper home-wrapper-2 py-5">
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
            </Container>
        </>
    )
}

export default Home