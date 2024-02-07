import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import { getBlogs, resetState } from "../features/blogs/blogSlice";
import moment from 'moment'
const Blog = () => {
      const dispatch = useDispatch();

       useEffect(() => {
        //  dispatch(resetState());
         dispatch(getBlogs());
       }, []);
       const getBlogState = useSelector((state) => state?.blog?.blog);
    return (
      <>
        <Meta title={"Blogs"} />
        <BreadCrumb title={"Blogs"} />
        <div className="store-wrapper home-wrapper-2 py-5">
          <div className="container-xxl">
            <div className="row">
              <div className="col-3">
                <div className="filter-card mb-3">
                  <h3 className="filter-title">Shop By Categories</h3>
                  <div>
                    <ul className="ps-0">
                      <li>Watch</li>
                      <li>Tv</li>
                      <li>Camera</li>
                      <li>Laptop</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-9">
                <div className="row gap-10">
                  {getBlogState?.length > 0 ? (
                    getBlogState.map((item, index) => (
                      <div className="gr-4" key={index}>
                        <BlogCard
                          id={item?._id}
                          title={item?.title}
                          description={item?.description}
                          images={item?.images[0].url}
                          date={moment(item?.createdAt).format(
                            "MMMM Do YYYY, h:mm:ss a"
                          )}
                        />
                      </div>
                    ))
                  ) : (
                    <div className="col-12">
                      <p>No blog posts available</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default Blog;
