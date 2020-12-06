import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyFour from "../../wrappers/hero-slider/HeroSliderTwentyFour";
import BannerTwentyThree from "../../wrappers/banner/BannerTwentyThree";
import TabProductFifteen from "../../wrappers/product/TabProductFifteen";
import BannerTwentyFour from "../../wrappers/banner/BannerTwentyFour";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import BlogFeaturedThree from "../../wrappers/blog-featured/BlogFeaturedThree";

const HomeBookStoreTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Book store Home</title>
        <meta
          name="description"
          content="Book store home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyFour />
        {/* banner */}
        <BannerTwentyThree spaceTopClass="pt-60" />
        {/* tab product */}
        <TabProductFifteen category="book" spaceTopClass="pt-95" />
        {/* banner */}
        <BannerTwentyFour spaceTopClass="pt-100" />
        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-70"
          spaceBottomClass="pb-95"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-8.png"
        />
        {/* feature icon */}
        <FeatureIconFour
          spaceBottomClass="pb-90"
          containerClass="container"
          responsiveClass="res-mrg-md-mt"
        />
        {/* blog featured */}
        <BlogFeaturedThree spaceBottomClass="pb-70" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeBookStoreTwo;
