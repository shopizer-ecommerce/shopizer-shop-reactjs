import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";

const CountDownSix = ({
  spaceTopClass,
  spaceBottomClass,
  dateTime,
  countDownImage
}) => {
  return (
    <div
      className={`funfact-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-8 col-lg-6 order-1 order-lg-2">
            <div className="funfact-content funfact-res text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <Countdown date={new Date(dateTime)} renderer={Renderer} />
              </div>
              <div className="funfact-btn funfact-btn-red btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-lg-6 order-2 order-lg-1">
            <div className="funfact-image">
              <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                <img
                  src={process.env.PUBLIC_URL + countDownImage}
                  alt=""
                  className="img-fluid"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-png-2">
        <img
          src={process.env.PUBLIC_URL + "/assets/img/bg/shape-2.png"}
          alt=""
        />
      </div>
    </div>
  );
};

CountDownSix.propTypes = {
  countDownImage: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownSix;
