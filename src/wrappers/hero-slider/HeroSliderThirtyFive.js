import React from "react";
import { Link } from "react-router-dom";
import sliderData from "../../data/hero-sliders/hero-slider-thirty-five.json";
import Countdown from "react-countdown-now";
import Renderer from "../../components/countdown/Renderer";

const HeroSliderThirtyFive = () => {
  return (
    <div className="slider-area">
      <div
        className="slider-height-2 bg-img slider-content-center"
        style={{
          backgroundImage: `url(${
            process.env.PUBLIC_URL + sliderData.backgroundImage
          })`
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-md-12 col-12 align-self-center">
              <div className="slider-content-15 slider15-mrg-nrg text-center">
                <h1 dangerouslySetInnerHTML={{ __html: sliderData.title }} />
                <div className="timer dealy-style-2 wow zoomIn">
                  <Countdown
                    date={new Date(sliderData.dateTime)}
                    renderer={Renderer}
                  />
                </div>
                <div className="slider-btn-12 btn-hover">
                  <Link
                    className="animated"
                    to={process.env.PUBLIC_URL + sliderData.url}
                  >
                    MORE OFFER
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

export default HeroSliderThirtyFive;
