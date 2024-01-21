import React from 'react';
import BreadCrumb from "../components/BreadCrumb";
import Meta from "../components/Meta";
import BlogCard from "../components/BlogCard";
import ReactStars from "react-rating-stars-component";
import {TfiLayoutGrid2Alt, TfiLayoutGrid3Alt, TfiLayoutGrid4Alt} from "react-icons/tfi";
import {ImMenu} from "react-icons/im";
import ProductCard from "../components/ProductCard";
const Blog = () => {
    return (
        <>
            <Meta title={"Blogs"}/>
            <BreadCrumb title={"Blogs"}/>
            <div className="store-wrapper home-wrapper-2 py-5">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-3">
                            <div className="filter-card mb-3">
                                <h3 className="filter-title">
                                    Shop By Categories
                                </h3>
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
                                <div className="gr-4">
                                    <BlogCard/>
                                </div>
                                <div className="gr-4">
                                    <BlogCard/>
                                </div>
                                <div className="gr-4">
                                    <BlogCard/>
                                </div>
                                <div className="gr-4">
                                    <BlogCard/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default Blog;
