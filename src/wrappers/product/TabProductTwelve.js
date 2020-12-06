import PropTypes from "prop-types";
import React, { useState } from "react";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Swiper from "react-id-swiper";
import SectionTitleFive from "../../components/section-title/SectionTitleFive";
import ProductGridTwo from "./ProductGridTwo";

const TabProductTwelve = ({
  spaceTopClass,
  spaceBottomClass,
  bgColorClass,
  category,
  sectionTitle
}) => {
  const [swiper, updateSwiper] = useState(null);
  const [swiper2, updateSwiper2] = useState(null);
  const [swiper3, updateSwiper3] = useState(null);

  const settings = {
    loop: false,
    grabCursor: true,
    observer: true,
    observeParents: true,
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

  const goNext = () => {
    if (swiper !== null) {
      swiper.slideNext();
    }
  };
  const goPrev = () => {
    if (swiper !== null) {
      swiper.slidePrev();
    }
  };

  const goNext2 = () => {
    if (swiper2 !== null) {
      swiper2.slideNext();
    }
  };
  const goPrev2 = () => {
    if (swiper2 !== null) {
      swiper2.slidePrev();
    }
  };

  const goNext3 = () => {
    if (swiper3 !== null) {
      swiper3.slideNext();
    }
  };
  const goPrev3 = () => {
    if (swiper3 !== null) {
      swiper3.slidePrev();
    }
  };
  return (
    <div
      className={`product-area product-area--style2 ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""} ${
        bgColorClass ? bgColorClass : ""
      }`}
    >
      <div className="container">
        <div className="product-tab-slider-wrapper position-relative">
          <Tab.Container defaultActiveKey="newArrival">
            <div className="product-top-bar section-border mb-60">
              <SectionTitleFive titleText={sectionTitle} />
              <Nav
                variant="pills"
                className="product-tab-list-3 bg-gray-5 text-center"
              >
                <Nav.Item>
                  <Nav.Link eventKey="newArrival">
                    <h4>New Arrivals</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="bestSeller">
                    <h4>Best Sellers</h4>
                  </Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="saleItems">
                    <h4>Sale Items</h4>
                  </Nav.Link>
                </Nav.Item>
              </Nav>
            </div>
            <Tab.Content>
              <Tab.Pane eventKey="newArrival">
                <div className="row">
                  <Swiper {...settings} getSwiper={updateSwiper}>
                    <ProductGridTwo
                      category={category}
                      type="new"
                      limit={8}
                      spaceBottomClass="mb-25"
                      sliderClassName="swiper-slide"
                    />
                  </Swiper>
                  <div className="swiper-slider-navigation-wrapper product-slider-active">
                    <button
                      className="swiper-button-prev ht-swiper-button-nav"
                      onClick={goPrev}
                    >
                      <i className="pe-7s-angle-left" />
                    </button>
                    <button
                      className="swiper-button-next ht-swiper-button-nav"
                      onClick={goNext}
                    >
                      <i className="pe-7s-angle-right" />
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="bestSeller">
                <div className="row">
                  <Swiper {...settings} getSwiper={updateSwiper2}>
                    <ProductGridTwo
                      category={category}
                      type="bestSeller"
                      limit={8}
                      spaceBottomClass="mb-25"
                      sliderClassName="swiper-slide"
                    />
                  </Swiper>
                  <div className="swiper-slider-navigation-wrapper">
                    <button
                      className="swiper-button-prev ht-swiper-button-nav"
                      onClick={goPrev2}
                    >
                      <i className="pe-7s-angle-left" />
                    </button>
                    <button
                      className="swiper-button-next ht-swiper-button-nav"
                      onClick={goNext2}
                    >
                      <i className="pe-7s-angle-right" />
                    </button>
                  </div>
                </div>
              </Tab.Pane>
              <Tab.Pane eventKey="saleItems">
                <div className="row">
                  <Swiper {...settings} getSwiper={updateSwiper3}>
                    <ProductGridTwo
                      category={category}
                      type="saleItems"
                      limit={8}
                      spaceBottomClass="mb-25"
                      sliderClassName="swiper-slide"
                    />
                  </Swiper>
                  <div className="swiper-slider-navigation-wrapper">
                    <button
                      className="swiper-button-prev ht-swiper-button-nav"
                      onClick={goPrev3}
                    >
                      <i className="pe-7s-angle-left" />
                    </button>
                    <button
                      className="swiper-button-next ht-swiper-button-nav"
                      onClick={goNext3}
                    >
                      <i className="pe-7s-angle-right" />
                    </button>
                  </div>
                </div>
              </Tab.Pane>
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
};

TabProductTwelve.propTypes = {
  bgColorClass: PropTypes.string,
  category: PropTypes.string,
  sectionTitle: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default TabProductTwelve;
