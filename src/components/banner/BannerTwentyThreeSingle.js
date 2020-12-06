import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerTwentyThreeSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-sm-6 col-12">
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

BannerTwentyThreeSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerTwentyThreeSingle;
