import PropTypes from "prop-types";
import React from "react";

const FeatureIconEightSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div
        className={`support-wrap-7 support-shape ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
        <div className="support-icon-7">
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </div>
        <div className="support-content-7">
          <h5>{data.title}</h5>
        </div>
      </div>
    </div>
  );
};

FeatureIconEightSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconEightSingle;
