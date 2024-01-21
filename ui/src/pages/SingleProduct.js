import React, {useState} from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import ProductCard from "../components/ProductCard";
import ReactStars from "react-rating-stars-component";


const SingleProduct = () => {

    const [orderedProduct, setOrderedProduct] = useState(true);
    return (
        <>
            <Meta title={"Product Name"}/>
            <BreadCrumb title={"Product Name"}/>
            <div className="main-product-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-6">
                            <div className="main-product-image">

                            </div>
                        </div>
                        <div className="col-6">
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

            <div className="reviews-wrapper py-5 home-wrapper-2">
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
            </div>

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