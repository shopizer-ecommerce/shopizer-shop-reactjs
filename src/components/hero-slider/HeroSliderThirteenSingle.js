import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderThirteenSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider-3 slider-height-3 bg-gray-2 d-flex align-items-center slider-height-res-hm4 ${
        sliderClassName ? sliderClassName : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-7 col-lg-7 col-md-6 col-12 col-sm-6">
            <div className="slider-content-3 slider-content-4 slider-animated-1 text-center">
              <h3 className="animated">{data.title}</h3>
              <h1 className="animated">{data.subtitle}</h1>
              <p className="animated">{data.text}</p>
              <div className="slider-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-xl-5 col-lg-5 col-md-6 col-12 col-sm-6">
            <div className="single-slider-img4 slider-animated-1">
              <img
                className="animated img-fluid"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
              <div className="single-price-wrap">
                <img src={process.env.PUBLIC_URL + data.shapeImage} alt="" />
                <div className="single-price">
                  <span>{data.shapeTitle}</span>
                  <span className="dollar">{data.shapeSubtitle}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderThirteenSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderThirteenSingle;
