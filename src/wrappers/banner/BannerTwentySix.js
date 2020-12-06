import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const BannerTwentySix = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container-fluid p-0">
        <div className="row no-gutters">
          <div className="col-width-banner33-1">
            <div className="single-banner mb-30">
              <a href="product-details.html">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner-43.png"
                  }
                  alt=""
                />
              </a>
              <div className="banner-content-33-2 banner-content-33-2-position1">
                <h4>Covid - 19</h4>
                <h2>
                  Medix Mask <br />
                  Up To 40% Off
                </h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-width-banner33-2">
            <div className="single-banner mb-30">
              <a href="product-details.html">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner-44.png"
                  }
                  alt=""
                />
              </a>
              <div className="banner-content-33-2 banner-content-33-2-position2">
                <h2>
                  Hand Gloves <br />
                  Up To 30% Off
                </h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
          <div className="col-width-banner33-1">
            <div className="single-banner mb-30">
              <a href="product-details.html">
                <img
                  src={
                    process.env.PUBLIC_URL + "/assets/img/banner/banner-45.png"
                  }
                  alt=""
                />
              </a>
              <div className="banner-content-33-2 banner-content-33-2-position3">
                <h4>Covid - 19</h4>
                <h2>
                  Hand Sanitizer <br />
                  Up To 40% Off
                </h2>
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

BannerTwentySix.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerTwentySix;
