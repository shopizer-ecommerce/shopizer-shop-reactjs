import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderSixSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider-2 slider-height-9 d-flex align-items-center slider-height-res hm-13-slider ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12">
            <div className="slider-content-7 slider-content-mrg-hm17 slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn-9 btn-hover">
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

HeroSliderSixSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderSixSingle;
