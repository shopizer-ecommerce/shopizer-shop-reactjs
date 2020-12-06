import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";

const CountDownOne = ({ spaceTopClass, spaceBottomClass, bgImg, dateTime }) => {
  return (
    <div
      className={`funfact-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL + bgImg})` }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-6 ml-auto">
            <div className="funfact-content text-center">
              <h2>Deal of the day</h2>
              <div className="timer">
                <Countdown date={new Date(dateTime)} renderer={Renderer} />
              </div>
              <div className="funfact-btn btn-hover">
                <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
                  SHOP NOW
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownOne.propTypes = {
  bgImg: PropTypes.string,
  dateTime: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownOne;
