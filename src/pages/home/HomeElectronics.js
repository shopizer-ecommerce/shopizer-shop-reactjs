import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import HeroSliderThree from "../../wrappers/hero-slider/HeroSliderThree";
import CategoryOneSlider from "../../wrappers/category/CategoryOneSlider";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductThree from "../../wrappers/product/TabProductThree";
import BannerThree from "../../wrappers/banner/BannerThree";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeaturedTwo from "../../wrappers/blog-featured/BlogFeaturedTwo";

const HomeElectronics = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Electronics Home</title>
        <meta
          name="description"
          content="Electronics home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutTwo>
        {/* hero slider */}
        <HeroSliderThree />

        {/* category slider */}
        <CategoryOneSlider spaceBottomClass="pb-95" />

        {/* section title with text */}
        <SectionTitleWithText spaceBottomClass="pb-90" />

        {/* tab product */}
        <TabProductThree spaceBottomClass="pb-60" category="electronics" />

        {/* banner */}
        <BannerThree spaceBottomClass="pb-100" />

        {/* testimonial */}
        <TestimonialOne
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          spaceLeftClass="ml-70"
          spaceRightClass="mr-70"
          bgColorClass="bg-gray-3"
        />

        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" spaceTopClass="pt-100" />

        {/* blog featured */}
        <BlogFeaturedTwo spaceBottomClass="pb-55" />
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeElectronics;
