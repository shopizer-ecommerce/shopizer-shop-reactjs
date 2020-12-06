import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import ProductGridEleven from "./ProductGridEleven";

const ProductSliderFive = ({
  spaceBottomClass,
  category,
  productGridStyleClass,
  type
}) => {
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
      <div className="row">
        <Swiper {...settings}>
          <ProductGridEleven
            category={category}
            type={type}
            limit={6}
            spaceBottomClass="mb-25"
            productGridStyleClass={productGridStyleClass}
            sliderClassName="swiper-slide"
          />
        </Swiper>
      </div>
    </div>
  );
};

ProductSliderFive.propTypes = {
  category: PropTypes.string,
  productGridStyleClass: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

export default ProductSliderFive;
