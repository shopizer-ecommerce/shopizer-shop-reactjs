import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerTwelveSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4 col-md-12">
      <div
        className={`single-banner-2 ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
        <div className="banner-content-2 banner-content-2--style3">
          <h3>{data.title}</h3>
          <h4>
            {data.subtitle} <span>{data.price}</span>
          </h4>
          <Link to={process.env.PUBLIC_URL + data.link}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerTwelveSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerTwelveSingle;
