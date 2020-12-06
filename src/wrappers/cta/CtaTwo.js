import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const CtaTwo = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`cta-area bg-img ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/img/bg/cta-bg.jpg"
        })`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ml-auto mr-auto">
            <div className="cta-content text-center">
              <h2 className="title">
                Every Piece Comes With <br /> a 10 Year Guarantee
              </h2>
              <p className="text">
                All Products Sale Up To <span>40% Off</span>
              </p>
              <Link
                className="cta-btn"
                to={process.env.PUBLIC_URL + "/shop-grid-standard"}
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CtaTwo.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CtaTwo;
