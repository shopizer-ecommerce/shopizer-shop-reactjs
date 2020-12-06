import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderSeventeen from "../../wrappers/hero-slider/HeroSliderSeventeen";
import CategoryFourSlider from "../../wrappers/category/CategoryFourSlider";
import BannerThirteen from "../../wrappers/banner/BannerThirteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import TabProductTen from "../../wrappers/product/TabProductTen";

const HomeHandmade = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Handmade Home</title>
        <meta
          name="description"
          content="Handmade home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderSeventeen />
        {/* category */}
        <CategoryFourSlider spaceTopClass="pt-100" spaceBottomClass="pb-95" />
        {/* banner */}
        <BannerThirteen />
        {/* tab product */}
        <TabProductTen
          spaceBottomClass="pb-65"
          spaceTopClass="pt-70"
          category="handmade"
        />
        {/* feature icon */}
        <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-3.png"
        />
        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
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

export default HomeHandmade;
