import React from "react";
import Swiper from "react-id-swiper";
import testimonialData from "../../data/testimonial/testimonial-three.json";
import TestimonialThreeSingle from "../../components/testimonial/TestimonialThreeSingle.js";

const TestimonialThree = () => {
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
      className="testimonial-area bg-img mt-195"
      style={{
        backgroundImage: `url(${
          process.env.PUBLIC_URL + "/assets/img/bg/testimonial-bg-2.jpg"
        })`
      }}
    >
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-7">
            <div className="testimonial-active-2">
              <Swiper {...settings}>
                {testimonialData &&
                  testimonialData.map((single, key) => {
                    return (
                      <TestimonialThreeSingle
                        data={single}
                        key={key}
                        sliderClass="swiper-slide"
                      />
                    );
                  })}
              </Swiper>
            </div>
          </div>
          <div className="col-lg-6 col-md-5">
            <div className="testimonial-img-2">
              <img
                className="wow fadeInUp"
                src={
                  process.env.PUBLIC_URL + "/assets/img/testimonial/testi-2.png"
                }
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialThree;
