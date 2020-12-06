import PropTypes from "prop-types";
import React from "react";

const TestimonialOneSingle = ({ data, sliderClass, testimonialClass }) => {
  return (
    <div
      className={`${
        testimonialClass ? testimonialClass : "single-testimonial"
      } text-center ${sliderClass ? sliderClass : ""}`}
    >
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p>{data.content}</p>
      <div className="client-info">
        <i className="fa fa-map-signs" />
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

TestimonialOneSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default TestimonialOneSingle;
