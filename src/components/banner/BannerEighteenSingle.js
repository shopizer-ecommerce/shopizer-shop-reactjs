import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerEighteenSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-xl-4 col-md-6">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
        <div className="banner-content banner-content--style2">
          <h3>{data.title}</h3>
          <h4>{data.subtitle}</h4>
          <Link to={process.env.PUBLIC_URL + data.link}>
            <i className="fa fa-long-arrow-right" />
          </Link>
        </div>
      </div>
    </div>
  );
};

BannerEighteenSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerEighteenSingle;
