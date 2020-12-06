import PropTypes from "prop-types";
import React from "react";

const SectionTitleSix = ({ sectionTitle, spaceBottomClass, positionClass }) => {
  return (
    <div
      className={`section-title-6 ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <h2 className={positionClass ? positionClass : ""}>{sectionTitle}</h2>
    </div>
  );
};

SectionTitleSix.propTypes = {
  positionClass: PropTypes.string,
  sectionTitle: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default SectionTitleSix;
