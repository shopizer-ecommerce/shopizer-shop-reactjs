import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const HeroSliderThirtyOneSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-slider slider-height-1 slider-height-res15 d-flex align-items-center slider-height-res bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-6 col-md-7">
            <div className="slider-content slider-content-10 slider-animated-1">
              <h3 className="animated">{data.title}</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: data.subtitle }}
              />
              <div className="slider-btn btn-hover btn-hover--blue">
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

HeroSliderThirtyOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderThirtyOneSingle;
