import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderThirtySixSingle = ({ data, sliderClassName }) => {
  return (
    <div
      className={`single-slider-2 slider-height-2 res-white-overly-xs d-flex valentine-slider-bg align-items-center bg-img ${
        sliderClassName ? sliderClassName : ""
      }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + data.backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="slider-content-32 slider-animated-1">
              <div className="content-img">
                <img
                  className="animated"
                  src={process.env.PUBLIC_URL + data.image}
                  alt=""
                />
              </div>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <div className="valentine-btn btn-hover">
                <Link
                  className="animated"
                  to={process.env.PUBLIC_URL + "/shop-grid-standard"}
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

HeroSliderThirtySixSingle.propTypes = {
  data: PropTypes.object,
  sliderClassName: PropTypes.string
};

export default HeroSliderThirtySixSingle;
