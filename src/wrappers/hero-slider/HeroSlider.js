import React from "react";
import PropTypes from "prop-types";
import HeroSliderStatic from "../../components/hero-slider/HeroSliderStatic.js";
import { multilanguage } from "redux-multilanguage";
import { connect } from 'react-redux';

const HeroSlider = ({ string }) => {

  return (
    <div className="site-blocks-cover">
      <div className="container">
        <HeroSliderStatic
          pitch1={string["Pitch1"]}
          pitch2={string["Pitch2"]}
          pitch3={string["Shop now"]}
        />
      </div>
    </div>
  );


};

const mapStateToProps = state => {

  return {
      currentLanguageCode: state.multilanguage.currentLanguageCode,
      defaultStore: state.merchantData.defaultStore,
      isLoading: state.loading.isLoading
  }
}

export default connect(mapStateToProps)(multilanguage(HeroSlider));
