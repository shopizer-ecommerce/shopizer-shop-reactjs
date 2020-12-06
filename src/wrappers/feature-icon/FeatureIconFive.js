import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-five.json";
import FeatureIconFiveSingle from "../../components/feature-icon/FeatureIconFiveSingle.js";

const FeatureIconFive = ({ spaceBottomClass }) => {
  return (
    <div
      className={`support-area  ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container">
        <div className="support-wrap-4-border">
          <div className="row">
            {featureIconData &&
              featureIconData.map((single, key) => {
                return (
                  <FeatureIconFiveSingle
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

FeatureIconFive.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default FeatureIconFive;
