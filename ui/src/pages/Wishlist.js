import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import { RxCross1 } from "react-icons/rx";
import { addWishlist } from "../features/product/productSlice";
import { getUserProductWishlist, resetState } from "../features/auth/userSlice";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Wishlist = () => {
  const dispatch = useDispatch();

  const removeToWishlist = (id) => {
    dispatch(addWishlist(id));
    setTimeout(() => {
      getWishlistFromDb();
    }, 300);
  };

  useEffect(() => {
    dispatch(resetState());
    getWishlistFromDb();
  }, []);

  const getWishlistFromDb = () => {
    dispatch(getUserProductWishlist());
  };
  const wishlistState = useSelector((state) => state?.auth.wishlist.wishlist);
  return (
    <>
      <Meta title={"Wishlist"} />
      <BreadCrumb title={"Wishlist"} />
      <div className="wishlist-wrapper home-wrapper-2 py-5">
        <div className="container-xxl">
          <div className="row">
            {wishlistState?.length > 0 ? (
              wishlistState.map((item, index) => (
                <div className="col-3" key={index}>
                  <div className="wishlist-card position-relative">
                    <RxCross1
                      className="position-absolute cross img-fluid"
                      size={35}
                      onClick={() => {
                        removeToWishlist(item?._id);
                      }}
                    />
                    <div className="wishlist-card-image">
                      <img src={item?.images[0]?.url} alt="image" />
                    </div>
                    <h5 className="title">{item?.title}</h5>
                    <h6 className="price">$ {item?.price}</h6>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-12 text-center">
                <h3>No items in your wishlist</h3>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
