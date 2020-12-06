import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderThirtyTwoSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-8 col-12">
            <div className="slider-content-blue slider-content-2 slider-content-2--white slider-animated-1">
              <h3
                className="animated no-style"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn-blue btn-hover">
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

HeroSliderThirtyTwoSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderThirtyTwoSingle;
