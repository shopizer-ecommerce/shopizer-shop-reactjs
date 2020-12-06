import PropTypes from "prop-types";
import React from "react";

const FeatureIconNineSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-6">
      <div
        className={`support-wrap-3 text-center ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
        style={{ backgroundColor: `${data.backgroundColor}` }}
      >
        <div className="support-icon-2">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.iconImage}
            alt=""
          />
        </div>
        <div className="support-content-3 support-content-3-white">
          <img src={process.env.PUBLIC_URL + data.titleImage} alt="" />
          <p>{data.title}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconNineSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconNineSingle;
