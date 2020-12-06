import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderFourteenSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`slider-height-5 d-flex align-items-center bg-img ${
        sliderClassName ? sliderClassName : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-12">
            <div className="slider-content-6 slider-animated-1 text-center">
              <h1 className="animated">{data.title}</h1>
              <p className="animated">{data.subtitle}</p>
              <div className="slider-btn-5 btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderFourteenSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderFourteenSingle;
