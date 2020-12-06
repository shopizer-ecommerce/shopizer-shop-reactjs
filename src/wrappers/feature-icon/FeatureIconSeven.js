import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-seven.json";
import FeatureIconSevenSingle from "../../components/feature-icon/FeatureIconSevenSingle.js";

const FeatureIconSeven = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`support-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row feature-icon-two-wrap">
          {featureIconData &&
            featureIconData.map((single, key) => {
              return (
                <FeatureIconSevenSingle
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
  );
};

FeatureIconSeven.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FeatureIconSeven;
