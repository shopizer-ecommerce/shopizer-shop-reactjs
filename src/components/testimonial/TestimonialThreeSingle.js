import PropTypes from "prop-types";
import React from "react";

const TestimonialThreeSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-testimonial-2 text-center ${
        sliderClass ? sliderClass : ""
      }`}
    >
      <p>{data.content}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

TestimonialThreeSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default TestimonialThreeSingle;
