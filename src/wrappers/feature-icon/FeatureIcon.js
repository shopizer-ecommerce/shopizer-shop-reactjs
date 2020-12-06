import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon.json";
import FeatureIconSingle from "../../components/feature-icon/FeatureIconSingle";

const FeatureIcon = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {featureIconData.map(singleFeature => {
            return (
              <FeatureIconSingle
                singleFeature={singleFeature}
                key={singleFeature.id}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

FeatureIcon.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIcon;
