import React from "react";
import { Link } from "react-router-dom";
import sliderData from "../../data/hero-sliders/hero-slider-thirty-four.json";

const HeroSliderThirtyFour = () => {
  return (
    <div className="slider-area">
      <div
        className="slider-height-5 bg-img d-flex align-items-center"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + sliderData.backgroundImage
          })`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12">
              <div className="slider-content-3 slider-content-3-white slider-animated-1 text-center">
                <h3 className="animated">{sliderData.title}</h3>
                <h1 className="animated">{sliderData.subtitle}</h1>
                <p className="animated">{sliderData.text}</p>
                <div className="slider-btn btn-hover">
                  <Link
                    className="animated"
                    to={process.env.PUBLIC_URL + sliderData.url}
                  >
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderThirtyFour;
