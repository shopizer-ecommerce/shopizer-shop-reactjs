import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerThirtyEightSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-sm-6 col-12 mb-30">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
      </div>
    </div>
  );
};

BannerThirtyEightSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerThirtyEightSingle;
