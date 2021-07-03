import PropTypes from "prop-types";
import React from "react";
const HeroSliderStatic = ({ string, pitch1, pitch2, pitch3, sliderText, sliderImage }) => {
  return (
<div className="row">
      <div className="col-md-12 col-sm-12">
          <img src="assets/img/slider/F45-Website-1.jpg" alt="Image" className="img-fluid"/>
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
