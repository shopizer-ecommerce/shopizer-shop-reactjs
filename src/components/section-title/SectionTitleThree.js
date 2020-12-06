import PropTypes from "prop-types";
import React from "react";

const SectionTitleThree = ({
  titleText,
  positionClass,
  spaceClass,
  colorClass
}) => {
  return (
    <div
      className={`section-title-5 ${positionClass ? positionClass : ""} ${
        spaceClass ? spaceClass : ""
      }`}
    >
      <h2 className={`${colorClass ? colorClass : ""}`}>{titleText}</h2>
    </div>
  );
};

SectionTitleThree.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  titleText: PropTypes.string
};

export default SectionTitleThree;
