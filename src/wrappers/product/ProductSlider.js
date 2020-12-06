import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import SectionTitle from "../../components/section-title/SectionTitle";
import ProductGridTwo from "./ProductGridTwo";

const ProductSlider = ({ spaceBottomClass, category }) => {
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
        <SectionTitle
          titleText="Our Products"
          positionClass="text-center"
          spaceClass="mb-55"
          borderClass="no-border"
        />
        <div className="row">
          <Swiper {...settings}>
            <ProductGridTwo
              category={category}
              limit={6}
              sliderClassName="swiper-slide"
              colorClass="pro-puce-color"
            />
          </Swiper>
        </div>
      </div>
    </div>
  );
};

ProductSlider.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductSlider;
