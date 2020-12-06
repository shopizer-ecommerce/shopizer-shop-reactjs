import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutEight from "../../layouts/LayoutEight";
import HeroSliderThirtyOne from "../../wrappers/hero-slider/HeroSliderThirtyOne";
import TabProductTwenty from "../../wrappers/product/TabProductTwenty";
import BannerThirtyOne from "../../wrappers/banner/BannerThirtyOne";
import CountDownFive from "../../wrappers/countdown/CountDownFive";
import TestimonialTwo from "../../wrappers/testimonial/TestimonialTwo";
import BrandLogoSliderFour from "../../wrappers/brand-logo/BrandLogoSliderFour";
import BlogFeaturedFive from "../../wrappers/blog-featured/BlogFeaturedFive";
import NewsletterFive from "../../wrappers/newsletter/NewsletterFive";

const HomeFurnitureSix = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Furniture Shop Home</title>
        <meta
          name="description"
          content="Furniture Shop home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutEight
        headerTop="visible"
        headerContainerClass="container-fluid"
        headerBorderStyle="fluid-border"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderThirtyOne
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          spaceBottomClass="pb-100"
        />
        {/* tab product */}
        <TabProductTwenty
          spaceBottomClass="pb-70"
          category="furniture"
          productGridStyleClass="product-wrap-10--style2 product-wrap-10--style2--blue"
        />
        {/* banner */}
        <BannerThirtyOne spaceBottomClass="pb-70" />
        {/* countdown */}
        <CountDownFive
          spaceBottomClass="pb-115"
          image="/assets/img/banner/deal-10.png"
          dateTime="November 13, 2020 12:12:00"
        />
        {/* testimonial */}
        <TestimonialTwo
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
          backgroundImage="/assets/img/bg/testimonial-bg.jpg"
        />

        {/* blog post */}
        <BlogFeaturedFive spaceTopClass="pt-100" spaceBottomClass="pb-70" />
        {/* newsletter */}
        <NewsletterFive
          subscribeBtnClass="dark-blue-subscribe"
          newsletterBg="/assets/img/bg/newsletter-bg.jpg"
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
        />
        {/* brand logo slider */}
        <BrandLogoSliderFour
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
          noBorder={true}
        />
      </LayoutEight>
    </Fragment>
  );
};

export default HomeFurnitureSix;
