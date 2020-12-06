import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderTwentyOne from "../../wrappers/hero-slider/HeroSliderTwentyOne";
import TabProductThirteen from "../../wrappers/product/TabProductThirteen";
import BannerEighteen from "../../wrappers/banner/BannerEighteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";

const HomeAutoParts = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Auto parts Home</title>
        <meta
          name="description"
          content="Auto parts home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderTwentyOne />
        {/* tab product */}
        <TabProductThirteen
          spaceBottomClass="pb-60"
          spaceTopClass="pt-100"
          category="auto parts"
        />
        {/* banner */}
        <BannerEighteen spaceBottomClass="pb-85" />
        {/* countdown */}
        <CountDownThree
          spaceBottomClass="pb-100"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-7.png"
        />
        {/* feature icon */}
        <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeAutoParts;
