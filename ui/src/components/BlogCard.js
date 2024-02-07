import React from 'react';
import {Link} from "react-router-dom";

const truncateText = (text, numWords) => {
  const words = text.split(" ");
  if (words.length > numWords) {
    return words.slice(0, numWords).join(" ") + "...";
  }
  return text;
};
const BlogCard = (props) => {
  const { id, title, description, images, date } = props;
  const truncatedDescription = truncateText(description, 20);
    return (
      <>
        <div className="blog-card gr-6">
          <div className="card-image">
            <img className="img-fluid w-100" src={images} alt="" />
          </div>
          <div className="blog-content">
            <p className="date">{date}</p>
            <h5 className="title">
              <h2 className="article-card__title 123" id="Article-558559887529">
                {title}
              </h2>
            </h5>
            <p
              className="desc"
              dangerouslySetInnerHTML={{ __html: truncatedDescription }}
            ></p>
            <Link to={`/blog/${id}`} className="button">
              Read more
            </Link>
          </div>
        </div>
      </>
    );
};

export default BlogCard;
