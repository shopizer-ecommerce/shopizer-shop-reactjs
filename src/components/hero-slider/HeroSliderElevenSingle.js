import PropTypes from "prop-types";
import React from "react";

const HeroSliderElevenSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`slider-height-6 d-flex align-items-center justify-content-center bg-img ${
        sliderClass ? sliderClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + data.image})` }}
    >
      <div className="slider-content-5 slider-animated-1 text-center">
        <h3 className="animated">{data.title}</h3>
        <h1 className="animated">{data.subtitle}</h1>
        <p className="animated">{data.text}</p>
      </div>
    </div>
  );
};

HeroSliderElevenSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default HeroSliderElevenSingle;
