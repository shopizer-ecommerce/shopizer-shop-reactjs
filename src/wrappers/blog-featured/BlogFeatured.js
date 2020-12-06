import PropTypes from "prop-types";
import React from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import SectionTitle from "../../components/section-title/SectionTitle";

const BlogFeatured = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`blog-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <SectionTitle
          titleText="OUR BLOG"
          positionClass="text-center"
          spaceClass="mb-55"
        />
        <div className="row">
          {blogFeaturedData.map(singlePost => {
            return (
              <BlogFeaturedSingle singlePost={singlePost} key={singlePost.id} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

BlogFeatured.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BlogFeatured;
