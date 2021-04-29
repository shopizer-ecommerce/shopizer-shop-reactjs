import React from "react";
import PropTypes from "prop-types";
import HeroSliderStatic from "../../components/hero-slider/HeroSliderStatic.js";
import { multilanguage } from "redux-multilanguage";

const HeroSlider = ({ string }) => {

  return (
    <div className="site-blocks-cover">
      <div className="container">
        <HeroSliderStatic
          pitch1={string["Styles"]}
          pitch2={string["Styles"]}
          pitch3={string["Styles"]}
        />
      </div>
    </div>
  );



};

export default (multilanguage(HeroSlider));
