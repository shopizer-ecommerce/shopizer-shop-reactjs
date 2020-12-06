import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-four.json";
import FeatureIconFourSingle from "../../components/feature-icon/FeatureIconFourSingle.js";

const FeatureIconFour = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg
}) => {
  return (
    <div
      className={`support-area hm9-section-padding ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""} ${
        responsiveClass ? responsiveClass : ""
      }`}
      style={
        bgImg
          ? { backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }
          : {}
      }
    >
      <div
        className={`${containerClass ? containerClass : ""} ${
          gutterClass ? gutterClass : ""
        }`}
      >
        <div className="row">
          {featureIconData &&
            featureIconData.map((single, key) => {
              return (
                <FeatureIconFourSingle
                  data={single}
                  spaceBottomClass="mb-10"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

FeatureIconFour.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconFour;
