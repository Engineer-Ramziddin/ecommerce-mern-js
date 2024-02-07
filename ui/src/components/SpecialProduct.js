import React from 'react';
import ReactStars from "react-rating-stars-component";
import {Link} from "react-router-dom";
import nout from "../assets/images/nout.jpg";
const SpecialProducts = (props) => {
    const { key, brand, title, totalrating, price, sold, quantity } = props

    return (
      <div className="col-6 mb-3">
        <div className="special-product-card">
          <div className="d-flex juctify-content-between">
            <div>
              <img className="img-fluid" src={nout} alt="special-product-img" />
            </div>
            <div className="special-product-content">
              <h5 className="brand">{brand}</h5>
              <h6 className="title">{title}</h6>
              <ReactStars
                count={5}
                size={24}
                value={totalrating}
                edit={false}
                activeColor="#ffd700"
              />
              <p className="price">
                <span className="red-p">$ {price}</span> &nbsp;
                <strike>$200</strike>
              </p>
              <div className="discount-till d-flex align-items-center gap-10">
                <p className="mb-0">
                  <b>5 days</b>
                </p>
              </div>
              <div className="d-flex gap-10 align-items-center">
                <span className="badge rounded-circle p-3 bg-warning">365</span>
                <span className="badge rounded-circle p-3 bg-warning">1</span>
                <span className="badge rounded-circle p-3 bg-warning">1</span>
              </div>
              <div className="prod-count my-3">
                <p>Products: {quantity}</p>
                <div className="progress">
                  <div
                    className="progress-bar"
                    role="progressbar"
                    style={{ width: `${(sold / (quantity + sold)) * 100}%` }}
                    aria-valuenow={sold}
                    aria-valuemin={0}
                    aria-valuemax={quantity + sold}
                  >
                    {`${Math.round((sold / (quantity + sold)) * 100)}%`}
                  </div>
                </div>
              </div>
              <Link className="button">Add to card</Link>
            </div>
          </div>
        </div>
      </div>
    );
};

export default SpecialProducts;
