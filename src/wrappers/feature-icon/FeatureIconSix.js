import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-six.json";
import FeatureIconSixSingle from "../../components/feature-icon/FeatureIconSixSingle.js";

const FeatureIconSix = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="border-bottom">
          <div className="row feature-icon-two-wrap">
            {featureIconData &&
              featureIconData.map((single, key) => {
                return (
                  <FeatureIconSixSingle
                    data={single}
                    spaceBottomClass="mb-30"
                    textAlignClass="text-center"
                    key={key}
                  />
                );
              })}
          </div>
        </div>
      </div>
    </div>
  );
};

FeatureIconSix.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconSix;
