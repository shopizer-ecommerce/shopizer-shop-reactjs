import PropTypes from "prop-types";
import React, { useState } from "react";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const FunFactOneSingle = ({ data, spaceBottomClass, textAlignClass }) => {
  const [didViewCountUp, setDidViewCountUp] = useState(false);

  const onVisibilityChange = isVisible => {
    if (isVisible) {
      setDidViewCountUp(true);
    }
  };
  return (
    <div className="col-lg-3 col-md-6 col-sm-6">
      <div
        className={`single-count ${textAlignClass ? textAlignClass : ""} ${
          spaceBottomClass ? spaceBottomClass : ""
        }`}
      >
        <div className="count-icon">
          <i className={data.iconClass} />
        </div>
        <h2 className="count">
          <VisibilitySensor
            onChange={onVisibilityChange}
            offset={{ top: 10 }}
            delayedCall
          >
            <CountUp end={didViewCountUp ? data.countNum : 0} />
          </VisibilitySensor>
        </h2>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

FunFactOneSingle.propTypes = {
  data: PropTypes.object,
  spaceBottomClass: PropTypes.string,
  textAlignClass: PropTypes.string
};

export default FunFactOneSingle;
