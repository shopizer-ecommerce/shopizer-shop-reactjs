import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";
const HeroSliderStatic = ({ sliderText, sliderImage }) => {
  return (


<div className="row">
      <div className="col-md-4 ml-auto order-md-2 align-self-start">
        <div className="site-block-cover-content">
            
            <h2 className="sub-title">#New Summer Collection 2021</h2>
            <h1>Arrivals Sales</h1>
            <p><a href="#" className="btn btn-black rounded-0">Shop Now</a></p>
        </div>
      </div>
      <div className="col-md-8 order-1 align-self-end">
          <img src="assets/img/slider/banner-demo.jpg" alt="Image" className="img-fluid"/>
      </div>
</div>
      

  );
};

HeroSliderStatic.propTypes = {
  text: PropTypes.string,
  image: PropTypes.string
};

export default multilanguage(HeroSliderStatic);
