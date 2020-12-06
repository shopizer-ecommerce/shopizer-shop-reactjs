import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderSixteen from "../../wrappers/hero-slider/HeroSliderSixteen";
import CategoryThreeSlider from "../../wrappers/category/CategoryThreeSlider";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import TabProductTen from "../../wrappers/product/TabProductTen";
import BannerTwelve from "../../wrappers/banner/BannerTwelve";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";

const HomeElectronicsTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Electronics Home</title>
        <meta
          name="description"
          content="Electronics home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderSixteen />
        {/* category */}
        <CategoryThreeSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        {/* feature icon */}
        <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        {/* tab product */}
        <TabProductTen
          spaceBottomClass="pb-60"
          spaceTopClass="pt-100"
          category="electronics"
        />
        {/* banner */}
        <BannerTwelve />
        {/* blog featured */}
        <BlogFeaturedThree spaceTopClass="pt-70" spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeElectronicsTwo;
