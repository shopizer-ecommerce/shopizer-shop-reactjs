import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderFourSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`slider-height-9 bg-gray-2 d-flex align-items-center ${
        sliderClass ? sliderClass : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center slider-h11-mrg">
          <div className="col-12 col-sm-6">
            <div className="slider-content-11 slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn-11 btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + data.url}
                >
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-12 col-sm-6">
            <div className="slider-singleimg-hm11 slider-animated-1">
              <img
                className="animated"
                src={process.env.PUBLIC_URL + data.image}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSliderFourSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderFourSingle;
