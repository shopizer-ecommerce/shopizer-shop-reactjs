import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";

const ProductImageGallerySlider = ({ product }) => {
  // swiper slider settings
  const gallerySwiperParams = {
    spaceBetween: 15,
    slidesPerView: 3,
    loop: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev"
    },
    renderPrevButton: () => (
      <button className="swiper-button-prev ht-swiper-button-nav">
        <i className="pe-7s-angle-left" />
      </button>
    ),
    renderNextButton: () => (
      <button className="swiper-button-next ht-swiper-button-nav">
        <i className="pe-7s-angle-right" />
      </button>
    ),
    breakpoints: {
      1024: {
        slidesPerView: 3
      },
      768: {
        slidesPerView: 2
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
    <div className="product-large-image-wrapper product-large-image-wrapper--slider">
      <Swiper {...gallerySwiperParams}>
        {product.image &&
          product.image.map((single, key) => {
            return (
              <div key={key}>
                <div className="single-image">
                  <img
                    src={process.env.PUBLIC_URL + single}
                    className="img-fluid"
                    alt=""
                  />
                </div>
              </div>
            );
          })}
      </Swiper>
    </div>
  );
};

ProductImageGallerySlider.propTypes = {
  product: PropTypes.object
};

export default ProductImageGallerySlider;
