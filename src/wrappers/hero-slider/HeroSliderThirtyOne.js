import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import sliderData from "../../data/hero-sliders/hero-slider-thirty-one.json";
import HeroSliderThirtyOneSingle from "../../components/hero-slider/HeroSliderThirtyOneSingle.js";

const HeroSliderThirtyOne = ({
  spaceLeftClass,
  spaceRightClass,
  spaceBottomClass
}) => {
  const params = {
    effect: "fade",
    loop: true,
    speed: 1000,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    watchSlidesVisibility: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    )
  };
  return (
    <div
      className={`slider-area ${spaceLeftClass ? spaceLeftClass : ""} ${
        spaceRightClass ? spaceRightClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="slider-active nav-style-3 nav-style-3--blue">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <HeroSliderThirtyOneSingle
                  data={single}
                  key={key}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

HeroSliderThirtyOne.propTypes = {
  spaceLeftClass: PropTypes.string,
  spaceRightClass: PropTypes.string
};

export default HeroSliderThirtyOne;
