import React, { useEffect } from "react";
import Meta from "../components/Meta";
import BreadCrumb from "../components/BreadCrumb";
import {Link} from "react-router-dom";
import {HiOutlineArrowLeft} from "react-icons/hi";
import laptop from "../assets/images/laptop.jpg";
import { getABlog, resetState } from "../features/blogs/blogSlice";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";


const SingleBlog = () => {
      const dispatch = useDispatch();
      const navigate = useNavigate();
      const location = useLocation();
      const getBlogCatId = location.pathname.split("/")[2];

      useEffect(() => {
        // dispatch(resetState());
        dispatch(getABlog(getBlogCatId));
      }, []);
      const getBlogState = useSelector((state) => state?.blog?.singleBlog);
    return (
      <>
        <Meta title={"Dynamic Blog Name"} />
        <BreadCrumb title={"Dynamic Blog Name"} />
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-12">
                <div className="single-blog-card">
                  <Link to="/blog">
                    <HiOutlineArrowLeft /> Back To Blogs
                  </Link>
                  <h3 className="title">{getBlogState?.title}</h3>
                  <div className="card-image">
                    <img
                      className="img-fluid w-100"
                      src={getBlogState?.images[0].url}
                      alt=""
                    />
                  </div>
                  <p
                    dangerouslySetInnerHTML={{
                      __html: getBlogState?.description
                    }}
                  ></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default SingleBlog;
