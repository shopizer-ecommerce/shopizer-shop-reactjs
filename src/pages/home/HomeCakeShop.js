import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import BannerNineteen from "../../wrappers/banner/BannerNineteen";
import TabProductFourteen from "../../wrappers/product/TabProductFourteen";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";
import BannerTwenty from "../../wrappers/banner/BannerTwenty";
import HeroSliderTwentyTwo from "../../wrappers/hero-slider/HeroSliderTwentyTwo";

const HomeCakeShop = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Cake shop Home</title>
        <meta
          name="description"
          content="Cake shop home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyTwo />
        {/* banner */}
        <BannerNineteen spaceTopClass="pt-100" spaceBottomClass="pb-80" />
        {/* feature icon */}
        <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        {/* tab product */}
        <TabProductFourteen
          category="cakes"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
        <BannerTwenty />
        {/* blog featured */}
        <BlogFeaturedThree spaceTopClass="pt-70" spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeCakeShop;
