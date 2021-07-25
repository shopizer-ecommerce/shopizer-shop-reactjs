import PropTypes from "prop-types";
import React from "react";
const HeroSliderStatic = ({ string, pitch1, pitch2, pitch3, sliderText, sliderImage }) => {
  return (

    <div className="row">
      <div className="col-md-4 ml-auto order-md-2 align-self-start">
        <div className="site-block-cover-content">

          <h2 className="sub-title">{pitch1}</h2>
          <h1>{pitch2}</h1>
          <p><a href="!#" className="btn btn-black rounded-0">{pitch3}</a></p>
        </div>
      </div>
      <div className="col-md-8 order-1 align-self-end">
        <img src="assets/img/slider/fireplace-pic.jpeg" alt="banner" className="img-fluid" />
      </div>
    </div>

  );
};

HeroSliderStatic.propTypes = {
  pitch1: PropTypes.string,
  pitch2: PropTypes.string,
  pitch3: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string
};

export default HeroSliderStatic;
