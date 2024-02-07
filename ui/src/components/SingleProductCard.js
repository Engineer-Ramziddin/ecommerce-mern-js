import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ReactStars from "react-rating-stars-component/dist/react-stars";
import { IoMdSwap } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import { FaShoppingBasket } from "react-icons/fa";
import { BiHeart } from "react-icons/bi";
import { addWishlist} from "../features/product/productSlice";

const SingleProductCard = (props) => {
    const { key, id, image, image1, brand, title, totalrating, price} = props;

    const dispatch = useDispatch();
    
    const addToWishlist = (id) => {
        dispatch(addWishlist(id))
    } 
    
    const [isExpanded, setExpanded] = useState(false);
    
    const toggleExpand = () => {
        setExpanded(!isExpanded);
    };
    return (
      <>
        <div className="col-3">
          <div className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
              <button
                className="text-dark bg-transparent"
                onClick={() => {
                  addToWishlist(id);
                }}
              >
                <BiHeart size={25} />
              </button>
            </div>
            <div className="product-image">
              <img className="img-fluid" src={image} alt="product img" />
              <img className="img-fluid" src={image1} alt="product img" />
            </div>
            <div className="product-details">
              <h6 className="brand">{brand}</h6>
              <Link key={key} className="product-link" to="/product/:id">
                <h5 className="product-title">{title}</h5>
              </Link>

              <ReactStars
                count={5}
                size={24}
                value={totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <div></div>
              <p className="price">$ {price}</p>
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
          </div>
        </div>
      </>
    );
}
        export default SingleProductCard;
        