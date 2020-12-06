import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";

const BrandLogoSliderThree = ({ spaceBottomClass, spaceTopClass }) => {
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
        spaceBottomClass ? spaceBottomClass : ""
      }  ${spaceTopClass ? spaceTopClass : ""}`}
    >
      <div className="container">
        <SectionTitleSeven
          titleText="Our Clients"
          positionClass="text-center"
          spaceClass="mb-50"
          borderClass="no-border"
        />
        <div className="brand-logo-active">
          <Swiper {...settings}>
            {brandLogoData &&
              brandLogoData.map((single, key) => {
                return (
                  <BrandLogoOneSingle
                    data={single}
                    key={key}
                    sliderClassName="swiper-slide"
                    spaceBottomClass="mb-30"
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderThree.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BrandLogoSliderThree;
