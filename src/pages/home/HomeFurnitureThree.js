import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderNineteen from "../../wrappers/hero-slider/HeroSliderNineteen";
import BannerSixteen from "../../wrappers/banner/BannerSixteen";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import CountDownThree from "../../wrappers/countdown/CountDownThree";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import BannerFifteen from "../../wrappers/banner/BannerFifteen";
import TabProductTwelve from "../../wrappers/product/TabProductTwelve";

const HomeFurnitureThree = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Furniture Home</title>
        <meta
          name="description"
          content="Furniture home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderNineteen />

        {/* banner */}
        <BannerFifteen spaceTopClass="pt-10" spaceBottomClass="pb-85" />

        {/* countdown */}
        <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-5.png"
        />

        {/* feature icon */}
        <FeatureIconFour
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />

        {/* tab product */}
        <TabProductTwelve
          category="furniture"
          spaceTopClass="pt-95"
          sectionTitle="Best Products"
        />

        {/* banner */}
        <BannerSixteen spaceTopClass="pt-95" />

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

export default HomeFurnitureThree;
