import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import BrandLogoOneSingle from "../../components/brand-logo/BrandLogoOneSingle";
import brandLogoData from "../../data/brand-logos/brand-logo-one.json";
import SectionTitle from "../../components/section-title/SectionTitle";

const BrandLogoSliderFive = ({ spaceBottomClass, spaceTopClass }) => {
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
        <SectionTitle
          titleText="Our Brands"
          subtitleText="Choose Your Favorite Brand"
          subtitleColorClass="grey"
          positionClass="text-center"
          spaceClass="mb-55"
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
                  />
                );
              })}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

BrandLogoSliderFive.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BrandLogoSliderFive;
