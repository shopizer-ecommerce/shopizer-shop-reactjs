import React, { useEffect, useState } from "react";
import Swiper from "react-id-swiper";
// import sliderData from "../../data/hero-sliders/hero-slider-fifteen.json";
import HeroSliderSingle from "../../components/hero-slider/HeroSliderSingle.js";
import WebService from '../../util/webService';
import constant from '../../util/constant';
const HeroSlider = ({ }) => {

  const [sliderText, setSliderText] = useState('')
  const [sliderData, setSliderData] = useState([])

  useEffect(() => {
    getBannerImage();
    getBannerText();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const getBannerImage = async () => {
    let action = constant.ACTION.CONTENT + constant.ACTION.IMAGES;
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        setSliderData(response.content);
      }
    } catch (error) {
    }
  }
  const getBannerText = async () => {
    let action = constant.ACTION.CONTENT + constant.ACTION.BOXES + constant.ACTION.BANNER_TEXT;
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        setSliderText(response);
      }
    } catch (error) {
    }
  }
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
    <div className="slider-area">
      <div className="slider-active nav-style-1">
        <Swiper {...params}>
          {sliderData &&
            sliderData.map((single, key) => {
              return (
                <HeroSliderSingle
                  data={single}
                  key={key}
                  sliderText={sliderText}
                  sliderClass="swiper-slide"
                />
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};

export default HeroSlider;
