import React, {useState} from 'react';
import ReactStars from "react-rating-stars-component/dist/react-stars";
import {IoMdSwap} from "react-icons/io";
import {Link, useLocation} from "react-router-dom";
import {IoEyeOutline} from "react-icons/io5";
import {FaShoppingBasket} from "react-icons/fa";
import {BiHeart} from "react-icons/bi";
import nout from "../assets/images/nout.jpg";
import nouthover from "../assets/images/nout-hover.webp";

const ProductCard = (props) => {
    const initialText = "The Lenovo IdeaPad 3i is the ideal Smart Learning notebook, combining 11th Generation Intel Core i5 processors with customized solutions for productive work and effective remote learning. It addresses issues like eye strain, posture problems, and home-based distractions while implementing intelligent thermal management for a cool and exceptionally quiet system. Additionally, the inclusion of a new privacy shutter for the camera offers you complete control over your privacy, whether you're at home or elsewhere.";

    const [isExpanded, setExpanded] = useState(false);

    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };
    const {grid} = props;
    let location = useLocation();
    return (
        <div className={`${location.pathname === "/product" ? `gr-${grid}` : "col-3"}`}>
            <Link className="product-link" to="/product/:id">
                <div className="product-card position-relative">
                    <div className="wishlist-icon position-absolute">
                        <button className="text-dark bg-transparent">
                            <BiHeart size={25}/>
                        </button>
                    </div>
                    <div className="product-image">
                        <img className="img-fluid" src={nout} alt=""/>
                        <img className="img-fluid" src={nouthover} alt=""/>
                    </div>
                    <div className="product-details">
                        <h6 className="brand">Havels</h6>
                        <h5 className="product-title">
                            Kids headphones bulk 10 pack multi colored for students
                        </h5>
                        <ReactStars
                            count={5}
                            size={24}
                            value={3}
                            edit={false}
                            activeColor="#ffd700"
                        />
                        <div>
                            <p className={`p-description ${grid === 12 ? "d-block" : "d-none"}`}>
                                {isExpanded ? (
                                    <>
                                        {initialText}
                                    </>
                                ) : (
                                    <>
                                        {initialText.split(' ').slice(0, 15).join(' ')}
                                        <br/>
                                        <a href="javascript:void(0);" onClick={toggleExpand}> Show</a>
                                    </>
                                )}
                            </p>
                            {isExpanded && (

                                <p>
                                    {/* Yana orqaga qaytarish tugmasi */}
                                    <a href="javascript:void(0);" onClick={toggleExpand}> Less</a>
                                </p>
                            )}
                        </div>
                        <p className="price">$100.00</p>
                    </div>
                    <div className="action-bar position-absolute">
                        <div className="d-flex flex-column">
                            <button className="border-0 bg-transparent">
                                <IoMdSwap size={25}/>
                            </button>
                            <button className="border-0 bg-transparent">
                                <IoEyeOutline size={25}/>
                            </button>
                            <button className="border-0 bg-transparent">
                                <FaShoppingBasket size={25}/>
                            </button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
        ;
};

export default ProductCard;
