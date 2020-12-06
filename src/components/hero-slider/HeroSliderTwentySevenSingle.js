import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderTwentySevenSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-1 d-flex align-items-center slider-height-res hm-13-slider ${
        sliderClass ? sliderClass : ""
      }`}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + data.image})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="slider-content-16 slider-animated-1">
              <h5
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.title }}
              />
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
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

HeroSliderTwentySevenSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderTwentySevenSingle;
