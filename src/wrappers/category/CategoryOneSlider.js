import PropTypes from "prop-types";
import React from "react";
import Swiper from "react-id-swiper";
import categoryData from "../../data/category/category-one.json";
import CategoryOneSingle from "../../components/category/CategoryOneSingle.js";

const CategoryOneSlider = ({ spaceBottomClass }) => {
  // swiper slider settings
  const settings = {
    loop: false,
    spaceBetween: 30,
    breakpoints: {
      992: {
        slidesPerView: 3
      },
      576: {
        slidesPerView: 2
      },
      320: {
        slidesPerView: 1
      }
    }
  };
  return (
    <div
      className={`collections-area ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container">
        <div className="collection-wrap-2">
          <div className="collection-active-2">
            <Swiper {...settings}>
              {categoryData &&
                categoryData.map((single, key) => {
                  return (
                    <CategoryOneSingle
                      data={single}
                      key={key}
                      sliderClass="swiper-slide"
                    />
                  );
                })}
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

CategoryOneSlider.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default CategoryOneSlider;
