import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import TabProductNineteen from "../../wrappers/product/TabProductNineteen";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import FeatureIconSeven from "../../wrappers/feature-icon/FeatureIconSeven";
import CategoryFiveGrid from "../../wrappers/category/CategoryFiveGrid";
import HeroSliderTwentyNine from "../../wrappers/hero-slider/HeroSliderTwentyNine";

const HomeFurnitureFour = () => {
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
        headerPaddingClass="header-padding-1"
        headerPositionClass="header-absolute"
      >
        {/* hero slider */}
        <HeroSliderTwentyNine />
        {/* category grid */}
        <CategoryFiveGrid spaceBottomClass="pb-70" />

        {/* feature icon */}
        <FeatureIconSeven spaceBottomClass="pb-70" />
        {/* video popup */}
        <VideoPopupTwo />
        {/* tab product */}
        <TabProductNineteen
          spaceTopClass="pt-95"
          spaceBottomClass="pb-100"
          category="furniture"
        />
        {/* countdown */}
        <CountDownFive
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg="/assets/img/bg/bg-6.jpg"
          image="/assets/img/banner/deal-9.png"
          dateTime="November 13, 2020 12:12:00"
        />
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />
        {/* image slider */}
        <ImageSliderTwo />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurnitureFour;
