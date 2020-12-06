import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import HeroSliderThirtyFive from "../../wrappers/hero-slider/HeroSliderThirtyFive";
import BannerThirtyFive from "../../wrappers/banner/BannerThirtyFive";
import TabProductFour from "../../wrappers/product/TabProductFour";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import TestimonialFour from "../../wrappers/testimonial/TestimonialFour";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import ImageSliderOne from "../../wrappers/image-slider/ImageSliderOne";
import BannerThirtySix from "../../wrappers/banner/BannerThirtySix";

const HomeBlackFridayTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Black friday Home</title>
        <meta
          name="description"
          content="Black friday home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSliderThirtyFive />
        {/* banner */}
        <BannerThirtyFive spaceTopClass="pt-100" spaceBottomClass="pb-70" />
        {/* tab product */}
        <TabProductFour
          category="furniture"
          productTabClass="product-tab-pink"
          spaceBottomClass="pb-100"
        />
        {/* banner */}
        <BannerThirtySix spaceBottomClass="pb-80" />
        {/* feature icon */}
        <FeatureIconFour
          containerClass="container"
          gutterClass="padding-10-row-col"
          spaceBottomClass="pb-100"
        />
        {/* testimonial */}
        <TestimonialFour
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          backgroundImage="/assets/img/bg/testimonial-bg-3.jpg"
          testimonialClass="single-testimonial-2"
        />
        {/* subscribe */}
        <NewsletterThree
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          subscribeBtnClass="dark-red-subscribe"
        />
        {/* image slider */}
        <ImageSliderOne />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeBlackFridayTwo;
