import PropTypes from "prop-types";
import React from "react";

const FeatureIconSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-3 col-md-3 col-sm-6 col-xs-6">
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
            width="75px"
            height="75px"
            style={{opacity: 0.2}}
          />
        </div>
        <div className="support-content-3">
          <h3 style={{color:"#555252"}}>{data.title}</h3>
          <small style={{color:"#651f1b"}}>{data.subtext}</small>
        </div>
      </div>
    </div>
  );
};

FeatureIconSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default FeatureIconSingle;
