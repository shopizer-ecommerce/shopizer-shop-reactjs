import React from "react";
import BannerEight from "../banner/BannerEight";
import HeroSliderSeven from "../hero-slider/HeroSliderSeven";

const SliderBanner = () => {
  return (
    <div className="slider-banner-area">
      <div className="container">
        <div className="row flex-row-reverse">
          <div className="col-lg-8 col-md-12">
            {/* hero slider */}
            <HeroSliderSeven />
          </div>
          {/* banner */}
          <BannerEight />
        </div>
      </div>
    </div>
  );
};

export default SliderBanner;
