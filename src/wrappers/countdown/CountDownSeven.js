import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";

const CountDownSeven = ({ bgColorClass, spaceTopClass, dateTime }) => {
  return (
    <div
      className={`black-friday-deal-area ${bgColorClass ? bgColorClass : ""} ${
        spaceTopClass ? spaceTopClass : ""
      }`}
    >
      <div className="container">
        <div className="black-friday-deal-content text-center">
          <h2>Black Friday Offer!</h2>
          <div className="dealy-style-2">
            <Countdown date={new Date(dateTime)} renderer={Renderer} />
          </div>
          <div className="slider-btn-12 btn-hover">
            <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>
              MORE OFFER
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

CountDownSeven.propTypes = {
  bgColorClass: PropTypes.string,
  dateTime: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default CountDownSeven;
