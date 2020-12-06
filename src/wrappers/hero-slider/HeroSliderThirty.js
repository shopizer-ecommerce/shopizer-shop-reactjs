import React from "react";
import sliderData from "../../data/hero-sliders/hero-slider-thirty.json";
import { Link } from "react-router-dom";

const HeroSliderThirty = () => {
  return (
    <div className="slider-area">
      <div
        className="single-slide bg-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + sliderData.backgroundImage
          })`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-10 ml-auto mr-auto">
              <div className="single-slide__content">
                <h2 className="title">{sliderData.title}</h2>
                <h4 className="subtitle">{sliderData.subtitle}</h4>
                <Link
                  className="button"
                  to={process.env.PUBLIC_URL + sliderData.url}
                >
                  Shop Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderThirty;
