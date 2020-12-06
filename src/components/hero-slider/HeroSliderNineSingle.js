import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderNineSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-1 d-flex align-items-center slider-height-res bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7 ml-auto">
            <div className="slider-content-2 slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              ></h1>
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
        </div>
      </div>
    </div>
  );
};

HeroSliderNineSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderNineSingle;
