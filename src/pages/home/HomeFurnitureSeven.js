import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderThirtyTwo from "../../wrappers/hero-slider/HeroSliderThirtyTwo";
import FeatureIconEight from "../../wrappers/feature-icon/FeatureIconEight";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
import BlogFeaturedFive from "../../wrappers/blog-featured/BlogFeaturedFive";
import ImageSliderTwo from "../../wrappers/image-slider/ImageSliderTwo";
import CtaTwo from "../../wrappers/cta/CtaTwo";

const HomeFurnitureSeven = () => {
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
        headerContainerClass="container"
        headerPaddingClass="header-padding-1"
      >
        {/* hero slider */}
        <HeroSliderThirtyTwo spaceBottomClass="pb-100" />
        {/* feature icon */}
        <FeatureIconEight spaceBottomClass="pb-100" />
        {/* tab product */}
        <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        />
        {/* call to action */}
        <CtaTwo spaceTopClass="pt-120" spaceBottomClass="pb-120" />
        {/* testimonial */}
        <TestimonialOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />
        {/* countdown */}
        <CountDownFive
          spaceTopClass="pt-115"
          spaceBottomClass="pb-115"
          bgImg="/assets/img/bg/bg-6.jpg"
          image="/assets/img/banner/deal-10.png"
          dateTime="November 13, 2020 12:12:00"
        />
        {/* blog post */}
        <BlogFeaturedFive spaceTopClass="pt-100" spaceBottomClass="pb-70" />
        {/* image slider */}
        <ImageSliderTwo />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFurnitureSeven;
