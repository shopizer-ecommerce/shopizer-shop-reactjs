import PropTypes from "prop-types";
import React from "react";

const SectionTitle = ({
  titleText,
  subtitleText,
  subtitleColorClass,
  positionClass,
  spaceClass,
  borderClass
}) => {
  return (
    <div
      className={`section-title ${positionClass ? positionClass : ""} ${
        spaceClass ? spaceClass : ""
      } ${borderClass ? borderClass : ""}`}
    >
      <h2>{titleText}</h2>
      <p className={subtitleColorClass ? subtitleColorClass : ""}>
        {subtitleText}
      </p>
    </div>
  );
};

SectionTitle.propTypes = {
  borderClass: PropTypes.string,
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subtitleText: PropTypes.string,
  subtitleColorClass: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitle;
