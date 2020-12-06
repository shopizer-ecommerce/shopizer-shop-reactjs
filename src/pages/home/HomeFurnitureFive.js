import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderThirty from "../../wrappers/hero-slider/HeroSliderThirty";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
import BrandLogoSliderFour from "../../wrappers/brand-logo/BrandLogoSliderFour";
import TabProductNineteen from "../../wrappers/product/TabProductNineteen";
import VideoPopupTwo from "../../components/video-popup/VideoPopupTwo";
import ProductSliderThree from "../../wrappers/product/ProductSliderThree";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";

const HomeFurnitureFive = () => {
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
        <HeroSliderThirty />
        {/* countdown */}
        <CountDownFive
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          image="/assets/img/banner/deal-9.png"
          dateTime="November 13, 2020 12:12:00"
        />
        {/* brand logo slider */}
        <BrandLogoSliderFour spaceBottomClass="pb-50" spaceTopClass="pt-50" />
        {/* tab product */}
        <TabProductNineteen
          spaceTopClass="pt-95"
          spaceBottomClass="pb-100"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2"
        />
        {/* video popup */}
        <VideoPopupTwo spaceBottomClass="pb-100" />
        {/* product slider */}
        <ProductSliderThree
          category="furniture"
          spaceBottomClass="pb-100"
          colorClass="product-wrap-8--brown"
        />
        {/* image slider */}
        <ImageSliderTwo />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurnitureFive;
