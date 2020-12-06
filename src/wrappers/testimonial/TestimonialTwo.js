import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import testimonialData from "../../data/testimonial/testimonial-one.json";
import TestimonialTwoSingle from "../../components/testimonial/TestimonialTwoSingle.js";

const TestimonialTwo = ({
  spaceTopClass,
  spaceBottomClass,
  spaceLeftClass,
  spaceRightClass,
  bgColorClass,
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
      className={`testimonial-area bg-img ${
        spaceTopClass ? spaceTopClass : ""
      }  ${spaceBottomClass ? spaceBottomClass : ""} ${
        spaceLeftClass ? spaceLeftClass : ""
      } ${spaceRightClass ? spaceRightClass : ""} ${
        bgColorClass ? bgColorClass : ""
      } `}
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL + backgroundImage})`
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 ml-auto mr-auto">
            <div className="testimonial-active nav-style-1 nav-testi-style">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <TestimonialTwoSingle
                        data={single}
                        key={key}
                        sliderClass="swiper-slide"
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

TestimonialTwo.propTypes = {
  bgColorClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TestimonialTwo;
