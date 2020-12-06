import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderTwentySix from "../../wrappers/hero-slider/HeroSliderTwentySix";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import TabProductSeventeen from "../../wrappers/product/TabProductSeventeen";
import ProductSliderTwo from "../../wrappers/product/ProductSliderTwo";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import NewsletterThree from "../../wrappers/newsletter/NewsletterThree";
import BannerTwentySeven from "../../wrappers/banner/BannerTwentySeven";

const HomeFlowerShopTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Flower Shop Home</title>
        <meta
          name="description"
          content="Flower Shop home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutEight
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderTwentySix spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* feature icon */}
        <FeatureIconFour
          spaceTopClass="pt-10"
          spaceBottomClass="pb-90"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
        />
        {/* tab product */}
        <TabProductSeventeen category="flower" spaceBottomClass="pb-100" />
        {/* banner */}
        <BannerTwentySeven spaceBottomClass="pb-70" />
        {/* product slider */}
        <ProductSliderTwo category="flower" spaceBottomClass="pb-100" />
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
          spaceTopClass="pt-80"
          spaceBottomClass="pb-95"
          subscribeBtnClass="dark-red-subscribe"
        />
      </LayoutEight>
    </Fragment>
  );
};

export default HomeFlowerShopTwo;
