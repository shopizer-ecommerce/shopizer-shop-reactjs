import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerTwentyFourSingle = ({ data, spaceBottomClass }) => {
  return (
    <div className="col-lg-4">
      <div
        className={`single-banner ${spaceBottomClass ? spaceBottomClass : ""}`}
      >
        <Link to={process.env.PUBLIC_URL + data.link}>
          <img src={process.env.PUBLIC_URL + data.image} alt="" />
        </Link>
        <div>
          <div className="banner-content-33">
            <h3>{data.title}</h3>
            <h2 dangerouslySetInnerHTML={{ __html: data.subtitle }} />
          </div>
          <div className="banner-33-offer">
            <h2>{data.text}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerTwentyFourSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string
};

export default BannerTwentyFourSingle;
