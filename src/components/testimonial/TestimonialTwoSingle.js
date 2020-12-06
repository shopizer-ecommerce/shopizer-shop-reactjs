import PropTypes from "prop-types";
import React from "react";

const TestimonialTwoSingle = ({ data, sliderClass }) => {
  return (
    <div
      className={`single-testimonial single-testimonial--style2 text-center ${
        sliderClass ? sliderClass : ""
      }`}
    >
      <img src={process.env.PUBLIC_URL + data.image} alt="" />
      <p>{data.content}</p>
      <div className="client-info">
        <h5>{data.customerName}</h5>
        <span>{data.title}</span>
      </div>
    </div>
  );
};

TestimonialTwoSingle.propTypes = {
  data: PropTypes.object,
  sliderClass: PropTypes.string
};

export default TestimonialTwoSingle;
