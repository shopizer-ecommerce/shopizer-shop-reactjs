import PropTypes from "prop-types";
import React from "react";

const FeatureIconSingle = ({ singleFeature }) => {
  return (
    <div className="col-lg-3 col-sm-6">
      <div className="support-wrap mb-30">
        <div className="support-icon">
          <img
            className="animated"
            src={process.env.PUBLIC_URL + singleFeature.image}
            alt=""
          />
        </div>
        <div className="support-content">
          <h5>{singleFeature.title}</h5>
          <p>{singleFeature.subtitle}</p>
        </div>
      </div>
    </div>
  );
};

FeatureIconSingle.propTypes = {
  singleFeature: PropTypes.object
};

export default FeatureIconSingle;
