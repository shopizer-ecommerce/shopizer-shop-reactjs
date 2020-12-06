import PropTypes from "prop-types";
import React from "react";
import featureIconData from "../../data/feature-icons/feature-icon-eight.json";
import FeatureIconEightSingle from "../../components/feature-icon/FeatureIconEightSingle.js";

const FeatureIconEight = ({ spaceBottomClass }) => {
  return (
    <div
      className={`support-area-7  ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container">
        <div className="row">
          {featureIconData &&
            featureIconData.map((single, key) => {
              return (
                <FeatureIconEightSingle
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

FeatureIconEight.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default FeatureIconEight;
