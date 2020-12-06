import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";

const CountDownFive = ({
  spaceTopClass,
  spaceBottomClass,
  bgImg,
  image,
  dateTime
}) => {
  return (
    <div
      className={`funfact-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-md-5">
            <div className="funfact-content funfact-content--style2 text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <Countdown date={new Date(dateTime)} renderer={Renderer} />
              </div>
              <div className="funfact-btn funfact-btn-brown btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="funfact-image text-center text-lg-right">
              <img
                src={process.env.PUBLIC_URL + image}
                alt=""
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownFive.propTypes = {
  bgImg: PropTypes.string,
  image: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownFive;
