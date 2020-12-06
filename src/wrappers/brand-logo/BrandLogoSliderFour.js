import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";

const BrandLogoSliderFour = ({ spaceBottomClass, spaceTopClass, noBorder }) => {
  const settings = {
    loop: true,
    autoplay: {
      delay: 3000,
      disableOnInteraction: false
    },
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 5
      },
      768: {
        slidesPerView: 4
      },
      640: {
        slidesPerView: 3
      },
      320: {
        slidesPerView: 2
      }
    }
  };

  return (
    <div
      className={`brand-logo-area ${
        noBorder ? "" : "border-top border-bottom"
      } ${spaceBottomClass ? spaceBottomClass : ""}  ${
        spaceTopClass ? spaceTopClass : ""
      }`}
    >
      <div className="container-fluid">
        <div className="brand-logo-active">
          <Swiper {...settings}>
            {brandLogoData &&
              brandLogoData.map((single, key) => {
                return (
                  <BrandLogoOneSingle
                    data={single}
                    key={key}
                    sliderClassName="swiper-slide"
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderFour.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BrandLogoSliderFour;
