import PropTypes from "prop-types";
import React from "react";
// import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
const HeroSliderFifteenSingle = ({ data, sliderClass, strings, sliderText }) => {
  return (
    <div
      className={`single-slider-2 d-flex align-items-center bg-img ${
        sliderClass ? sliderClass : ""
        }`}
      style={{ backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.1) 0%,rgba(0,0,0,0.6) 100%),url("assets/img/slider/F45-Website-1.jpg")` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-sm-8 col-12 ml-auto">
            <div className="slider-content-2 slider-animated-1">
              <h3 className="animated no-style">Enjoy This Offer Today</h3>
              <h2 className="animated">blabla</h2>
              <div className="slider-btn btn-hover">
                {/* <Link
                  className="animated rounden-btn"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  {strings["Shop Now"]}
                </Link> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderFifteenSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default multilanguage(HeroSliderFifteenSingle);