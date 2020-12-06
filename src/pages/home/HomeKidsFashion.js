import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderEighteen from "../../wrappers/hero-slider/HeroSliderEighteen";
import BannerFourteen from "../../wrappers/banner/BannerFourteen";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import TabProductEleven from "../../wrappers/product/TabProductEleven";
import TabProductTwelve from "../../wrappers/product/TabProductTwelve";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";

const HomeFashion = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderEighteen />
        {/* banner */}
        <BannerFourteen spaceTopClass="pt-95" spaceBottomClass="pb-70" />
        {/* tab product */}
        <TabProductEleven
          category="kids"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          sectionTitle="Featured Products"
          bgColorClass="bg-gray-3"
        />
        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-95"
          spaceBottomClass="pb-95"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-4.jpg"
        />
        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-95"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />
        {/* tab product */}
        <TabProductTwelve
          category="kids"
          spaceTopClass="pt-95"
          sectionTitle="Best Products"
        />
        {/* newsletter */}
        <NewsletterThree
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashion;
