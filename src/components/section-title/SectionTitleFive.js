import PropTypes from "prop-types";
import React from "react";

const SectionTitleFive = ({ titleText }) => {
  return (
    <div className="section-title-4">
      <h3 className="bg-gray-5">{titleText}</h3>
    </div>
  );
};

SectionTitleFive.propTypes = {
  sectionTitle: PropTypes.string
};

export default SectionTitleFive;
