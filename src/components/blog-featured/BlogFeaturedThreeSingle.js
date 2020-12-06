import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BlogFeaturedThreeSingle = ({ singlePost }) => {
  return (
    <div className="col-lg-4 col-sm-6">
      <div className="blog-wrap mb-30 scroll-zoom">
        <div className="blog-img">
          <Link to={process.env.PUBLIC_URL + singlePost.url}>
            <img src={process.env.PUBLIC_URL + singlePost.image} alt="" />
          </Link>
          <div className="blog-category-names blog-category-names--style2">
            {singlePost.category.map((singleCategory, key) => {
              return (
                <span className="red" key={key}>
                  {singleCategory}
                </span>
              );
            })}
          </div>
        </div>
        <div className="blog-content-wrap">
          <div className="blog-content blog-content--style2 text-center">
            <h3>
              <Link to={process.env.PUBLIC_URL + singlePost.url}>
                {singlePost.title}
              </Link>
            </h3>
            <span>
              By{" "}
              <Link to={process.env.PUBLIC_URL + singlePost.authorUrl}>
                {singlePost.author}
              </Link>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

BlogFeaturedThreeSingle.propTypes = {
  singlePost: PropTypes.object
};

export default BlogFeaturedThreeSingle;
