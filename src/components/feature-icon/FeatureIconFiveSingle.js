import PropTypes from "prop-types";
import React from "react";

const FeatureIconFiveSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  return (
    <div className="col-lg-4 col-md-4 col-sm-6">
      <div
        className={`support-wrap-4 ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <div className="support-icon-4">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + data.image}
            alt=""
          />
        </div>
        <div className="support-content-4">
          <h5>{data.title}</h5>
          <p>{data.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconFiveSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconFiveSingle;
