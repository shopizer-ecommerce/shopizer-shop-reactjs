import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import SectionTitleSeven from "../../components/section-title/SectionTitleSeven";
import ProductGridEight from "./ProductGridEight";

const ProductSliderThree = ({ spaceBottomClass, category, colorClass }) => {
  const settings = {
    loop: false,
    slidesPerView: 4,
    grabCursor: true,
    breakpoints: {
      1024: {
        slidesPerView: 4
      },
      768: {
        slidesPerView: 3
      },
      640: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };

  return (
    <div
      className={`related-product-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <SectionTitleSeven
          titleText="Our Products"
          subtitleText="Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
        <div className="row">
          <Swiper {...settings}>
            <ProductGridEight
              category={category}
              limit={6}
              sliderClassName="swiper-slide"
              colorClass={colorClass}
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

ProductSliderThree.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductSliderThree;
