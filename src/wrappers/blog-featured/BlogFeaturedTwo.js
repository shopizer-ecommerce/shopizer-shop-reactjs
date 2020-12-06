import PropTypes from "prop-types";
import React from "react";
import blogFeaturedData from "../../data/blog-featured/blog-featured.json";
import BlogFeaturedSingle from "../../components/blog-featured/BlogFeaturedSingle";
import SectionTitleTwo from "../../components/section-title/SectionTitleTwo";

const BlogFeaturedTwo = ({ spaceBottomClass }) => {
  return (
    <div className={`blog-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container">
        <SectionTitleTwo
          titleText="OUR BLOG"
          subTitleText="Lorem ipsum dolor sit amet conse ctetu."
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

BlogFeaturedTwo.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BlogFeaturedTwo;
