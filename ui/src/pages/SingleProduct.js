import React, {useState} from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";
import nout from '../assets/images/nout-1-1.jpg';
import ReactImageMagnify from 'react-image-magnify';
import Color from "../components/Color";
import {MdCompareArrows} from "react-icons/md";
import {AiOutlineHeart} from "react-icons/ai";

const SingleProduct = () => {
    const zoomImg = nout;
    const [orderedProduct, setOrderedProduct] = useState(true);
    const copyToClipboard = (text) => {
        console.log('text', text)
        text = `http://localhost:3000${text}`
        var textField = document.createElement('textarea')
        textField.innerText = text
        document.body.appendChild(textField)
        textField.select()
        document.execCommand('copy')
        textField.remove()
    }
    return (
        <>
            <Meta title={"Product Name"}/>
            <BreadCrumb title={"Product Name"}/>
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row bg-white">
                        <div className="col-6">
                            <div className="main-product-image">
                                <div>
                                    <ReactImageMagnify {...{
                                        smallImage: {
                                            alt: 'Wristwatch by Ted Baker London',
                                            isFluidWidth: true,
                                            src: zoomImg
                                        },
                                        largeImage: {
                                            src: zoomImg,
                                            width: 1200,
                                            height: 1800
                                        },
                                        className: "ReactImageMagnify"
                                    }} />
                                </div>
                            </div>
                            <div className="other-product-images d-flex flex-wrap gap-15">
                                <div><img className="img-fluid" src={nout} alt=""/></div>
                                <div><img className="img-fluid" src={nout} alt=""/></div>
                                <div><img className="img-fluid" src={nout} alt=""/></div>
                                <div><img className="img-fluid" src={nout} alt=""/></div>
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="main-product-details">
                                <div className="border-bottom">
                                    <h3 className="title">
                                        Kids headphones bulk 10 pack multi colored for students
                                    </h3>
                                </div>
                                <div className="border-bottom">
                                    <p className="price">$ 100</p>
                                    <div className="d-flex align-items-center gap-10">
                                        <ReactStars
                                            count={5}
                                            size={24}
                                            value={3}
                                            edit={false}
                                            activeColor="#ffd700"
                                        />
                                        <p className="mb-0">( 2 Reviews )</p>
                                    </div>
                                    <a href="#review">Write a Review</a>
                                </div>
                                <div className="border-bottom py-3">
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Type: </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Brand: </h3>
                                        <p className="product-data">Havells</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Category: </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Tags: </h3>
                                        <p className="product-data">Watch</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Avialablity: </h3>
                                        <p className="product-data">In stock</p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Size: </h3>
                                        <div className="d-flex flex-wrap gap-15">
                                            <span
                                                className="badge text-dark border-1 bg-white border-secondary border">S</span>
                                            <span
                                                className="badge text-dark border-1 bg-white border-secondary border">M</span>
                                            <span
                                                className="badge text-dark border-1 bg-white border-secondary border">XL</span>
                                            <span
                                                className="badge text-dark border-1 bg-white border-secondary border">XXL</span>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Color: </h3>
                                        <Color/>
                                    </div>
                                    <div className="d-flex flex-row mt-2 mb-3">
                                        <h3 className="product-heading">Quantity: </h3>
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
                                        <div className="d-flex justify-content-center gap-30 align-items-center ms-2">
                                            <button type="submit" className="button">Add to Card</button>
                                            <button className="button">Buy Now</button>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <div>
                                            <a href="">
                                                <MdCompareArrows size={35}/> Add to Compare
                                            </a>
                                        </div>
                                        <div>
                                            <a href="">
                                                <AiOutlineHeart size={35}/> Add to Wishlist
                                            </a>
                                        </div>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Shipping & Returns: </h3>
                                        <p className="product-data">
                                            Free shipping and returns avialable on all orders! <br/>{""}
                                            We ship all US domestic orders within{""}
                                            <b>5-10 business days!</b>
                                        </p>
                                    </div>
                                    <div className="d-flex align-items-center gap-10 my-2">
                                        <h3 className="product-heading">Copy Product Link: </h3>
                                        <a
                                            href="javascipt:void(0)"
                                            onClick={()=>{
                                                copyToClipboard(nout)
                                            }}
                                        >
                                            Copy Product Link
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="description-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className='bg-white p-3'>
                                <h4>Description</h4>
                                <p className="">
                                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a
                                    piece of
                                    classical Latin literature from 45 BC, making it over 2000 years old. Richard
                                    McClintock, a
                                    Latin professor at Hampden-Sydney College in Virginia, looked up one of the more
                                    obscure Latin
                                    words, consectetur, from a Lorem Ipsum passage, and going through the cites of the
                                    word in
                                    classical literature, discovered the undoubtable source. Lorem Ipsum comes from
                                    sections 1.10.32
                                    and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by
                                    Cicero,
                                    written in 45 BC. This book is a treatise on the theory of ethics, very popular
                                    during the
                                    Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes
                                    from a line in
                                    section 1.10.32.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <section id="review" className="reviews-wrapper py-5 home-wrapper-2">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <div className="review-inner-wrapper">
                                <div className='review-head d-flex flex-column'>
                                    <div>
                                        <h4 className="mb-2">
                                            Customer Reviews
                                        </h4>
                                        <div className="d-flex align-items-center gap-10">
                                            <ReactStars
                                                count={5}
                                                size={24}
                                                value={3}
                                                edit={false}
                                                activeColor="#ffd700"
                                            />
                                            <p className="m-0">Based on 2 Reviews</p>
                                        </div>
                                    </div>
                                    <div>
                                        {
                                            orderedProduct && (
                                                <div>
                                                    <a className="text-dark text-decoration-underline" href="">
                                                        Write a Review
                                                    </a>
                                                </div>
                                            )
                                        }
                                    </div>
                                    <div className="review-form py-4">
                                        <h4>Write a Review</h4>
                                        <form action="" className="d-flex flex-column gap-15">
                                            <div>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={3}
                                                    edit={false}
                                                    activeColor="#ffd700"
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
                                                >

                                                </textarea>
                                            </div>
                                            <div className="d-flex justify-content-end">
                                                <button type="submit" className="button">Submit Review</button>
                                            </div>
                                        </form>
                                    </div>
                                    <div className="reviews">
                                        <div className="review">
                                            <div className="d-flex gap-10 align-items-center">
                                                <h6 className="m-0">Navdeep</h6>
                                                <ReactStars
                                                    count={5}
                                                    size={24}
                                                    value={3}
                                                    edit={false}
                                                    activeColor="#ffd700"
                                                />
                                            </div>
                                            <p>
                                                Contrary to popular belief, Lorem Ipsum is not simply random text. It
                                                has roots in a piece of
                                                classical Latin literature from 45 BC, making it over 2000 years old.
                                                Richard McClintock, a
                                                Latin professor at Hampden-Sydney College in Virginia, looked up one of
                                                the more obscure Latin
                                                words, consectetur, from a Lorem Ipsum passage, and going through the
                                                cites of the word in
                                                classical literature, discovered the undoubtable source. Lorem Ipsum
                                                comes from sections 1.10.32
                                                and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
                                                Evil) by Cicero,
                                                written in 45 BC. This book is a treatise on the theory of ethics, very
                                                popular during the
                                                Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
                                                amet..", comes from a line in
                                                section 1.10.32.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
        </>
    )
        ;
}

export default SingleProduct;