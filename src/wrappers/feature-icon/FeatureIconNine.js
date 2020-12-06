import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-nine.json";
import FeatureIconNineSingle from "../../components/feature-icon/FeatureIconNineSingle.js";

const FeatureIconNine = ({
  spaceTopClass,
  spaceBottomClass,
  containerClass,
  gutterClass,
  responsiveClass,
  bgImg,
  bgColorClass
}) => {
  return (
    <div
      className={`support-area hm9-section-padding ${
        bgColorClass ? bgColorClass : ""
      } ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${responsiveClass ? responsiveClass : ""}`}
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
                <FeatureIconNineSingle
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

FeatureIconNine.propTypes = {
  bgImg: PropTypes.string,
  containerClass: PropTypes.string,
  gutterClass: PropTypes.string,
  responsiveClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  bgColorClass: PropTypes.string
};

export default FeatureIconNine;
