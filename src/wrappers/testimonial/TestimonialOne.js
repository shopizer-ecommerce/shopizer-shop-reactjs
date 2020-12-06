import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialOneSingle from "../../components/testimonial/TestimonialOneSingle.js";

const TestimonialOne = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
  testimonialClass,
  backgroundImage
}) => {
  // swiper slider settings
  const settings = {
    slidesPerView: 1,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    }
  };

  return (
    <div
      className={`testimonial-area ${spaceTopClass ? spaceTopClass : ""}  ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${spaceLeftClass ? spaceLeftClass : ""}  ${
        spaceRightClass ? spaceRightClass : ""
      } ${bgColorClass ? bgColorClass : ""}`}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ml-auto mr-auto">
            <div className="testimonial-active nav-style-1 nav-testi-style">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <TestimonialOneSingle
                        data={single}
                        key={key}
                        sliderClass="swiper-slide"
                        testimonialClass={testimonialClass}
                      />
                    );
                  })}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

TestimonialOne.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string,
  testimonialClass: PropTypes.string
};

export default TestimonialOne;
