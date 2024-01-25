import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import { IoMdSwap } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { addWishlist} from "../features/product/productSlice";

const ProductCard = (props) => {
    const dispatch = useDispatch();
    
    const addToWishlist = (id) => {
        dispatch(addWishlist(id))
    } 
    
    const [isExpanded, setExpanded] = useState(false);
    
    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };
    const { grid, products } = props;
    let location = useLocation();
    return (
        <>
        {products?.map((item, index) => {
            return (
              <div
                className={`${
                  location.pathname === "/product" ? `gr-${grid}` : "col-3"
                }`}
              >
                <div className="product-card position-relative">
                  <div className="wishlist-icon position-absolute">
                    <button
                      className="text-dark bg-transparent"
                      onClick={() => {
                        addToWishlist(item?._id);
                      }}
                    >
                      <BiHeart size={25} />
                    </button>
                  </div>
                  <div className="product-image">
                    <img
                      className="img-fluid"
                      src={item?.images[0]?.url}
                      alt="product img"
                    />
                    <img
                      className="img-fluid"
                      src={item?.images[1]?.url}
                      alt="product img"
                    />
                  </div>
                  <div className="product-details">
                    <h6 className="brand">{item?.brand}</h6>
                    <Link
                      key={index}
                      className="product-link"
                      to="/product/:id"
                    >
                      <h5 className="product-title">{item?.title}</h5>
                    </Link>

                    <ReactStars
                      count={5}
                      size={24}
                      value={item?.totalrating}
                      edit={false}
                      activeColor="#ffd700"
                    />
                    <div>
                      <p
                        className={`p-description ${
                          grid === 12 ? "d-block" : "d-none"
                        }`}
                        dangerouslySetInnerHTML={{ __html: item?.description }}
                      ></p>
                    </div>
                    <p className="price">$ {item?.price}</p>
                  </div>
                  <div className="action-bar position-absolute">
                    <div className="d-flex flex-column">
                      <button className="border-0 bg-transparent">
                        <IoMdSwap size={25} />
                      </button>
                      <button className="border-0 bg-transparent">
                        <IoEyeOutline size={25} />
                      </button>
                      <button className="border-0 bg-transparent">
                        <FaShoppingBasket size={25} />
                      </button>
                    </div>
                  </div>
                </div>{" "}
              </div>
            );
            })}
            </>
            );
        };
        
        export default ProductCard;
        