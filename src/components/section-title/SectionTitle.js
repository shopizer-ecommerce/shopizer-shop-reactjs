import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";
const SectionTitle = ({
  titleText,
  positionClass,
  spaceClass,
  colorClass,
  strings
}) => {
  return (
    <div
      className={`section-title-5 ${positionClass ? positionClass : ""} ${spaceClass ? spaceClass : ""}`} >
      <h2 className={colorClass ? colorClass : ""}>{strings[titleText]}</h2>
    </div>
  );
};

SectionTitle.propTypes = {
  positionClass: PropTypes.string,
  spaceClass: PropTypes.string,
  titleText: PropTypes.string,
  strings: PropTypes.object
};

export default multilanguage(SectionTitle);
