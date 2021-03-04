import PropTypes from "prop-types";
import React from "react";
// import { Link } from "react-router-dom";
import { multilanguage } from "redux-multilanguage";
const HeroSliderFifteenSingle = ({ data, sliderClass, strings, sliderText }) => {
  return (
    <div
      className={`single-slider-2 slider-height-2 d-flex align-items-center bg-img ${
        sliderClass ? sliderClass : ""
        }`}
      style={{ backgroundImage: `url(${data.path + data.name})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-xl-6 col-lg-7 col-md-8 col-12 ml-auto">
            <div className="slider-content-2 slider-animated-1">
              <h3 className="animated no-style">Enjoy This Offer Today</h3>
              <h1
                className="animated"
                dangerouslySetInnerHTML={{ __html: sliderText.description.description.replace(/>]]/g, "&gt;") }}
              />
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