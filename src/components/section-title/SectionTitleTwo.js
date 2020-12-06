import PropTypes from "prop-types";
import React from "react";

const SectionTitleTwo = ({
  titleText,
  subTitleText,
  positionClass,
  spaceClass
}) => {
  return (
    <div
      className={`section-title-2 ${positionClass ? positionClass : ""} ${
        spaceClass ? spaceClass : ""
      }`}
    >
      <h2>{titleText}</h2>
      <p>{subTitleText}</p>
    </div>
  );
};

SectionTitleTwo.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  subTitleText: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleTwo;
