import React from 'react';
import {Link} from "react-router-dom";

const BlogCard = () => {
    return (
        <>
            <div className="blog-card gr-6">
                <div className="card-image">
                    <img className="img-fluid w-100"
                         src={require('assets/images/laptop.jpg')} alt=""/>
                </div>
                <div className="blog-content">
                    <p className="date">3 Jan, 2024</p>
                    <h5 className="title">
                        <h2 className="article-card__title 123" id="Article-558559887529">
                            A beatiful sunday morning renaissance
                        </h2>
                    </h5>
                    <p className="desc">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of
                        classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a
                        Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin
                        words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in
                        classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32
                        and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
                        written in 45 BC. This book is a treatise on the theory of ethics, very popular during the
                        Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
                        section 1.10.32.
                    </p>
                    <Link to={'/'} className="button">
                        Read more
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BlogCard;
