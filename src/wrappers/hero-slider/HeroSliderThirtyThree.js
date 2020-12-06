import React from "react";
import { Link } from "react-router-dom";
import sliderData from "../../data/hero-sliders/hero-slider-thirty-three.json";

const HeroSliderThirtyThree = () => {
  return (
    <div className="slider-area position-relative">
      <span
        className="body-effect effect-snow"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + "/assets/img/icon-img/snow1.png"
          })`
        }}
      />
      <div
        className="single-slider slider-height-14 bg-img"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + sliderData.backgroundImage
          })`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6 align-self-center">
              <div className="slider-content-14">
                <h3>{sliderData.title}</h3>
                <h1 dangerouslySetInnerHTML={{ __html: sliderData.subtitle }} />
                <div className="slider-btn btn-hover">
                  <Link to={process.env.PUBLIC_URL + sliderData.url}>
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-6 col-lg-6 col-md-6 col-12 col-sm-6">
              <div className="slider-single-img-14">
                <img src={process.env.PUBLIC_URL + sliderData.image} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSliderThirtyThree;
