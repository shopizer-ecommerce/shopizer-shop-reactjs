import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import TestimonialOne from "../../wrappers/testimonial/TestimonialOne";
import BrandLogoSliderOne from "../../wrappers/brand-logo/BrandLogoSliderOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderEight from "../../wrappers/hero-slider/HeroSliderEight";
import FeatureIconThree from "../../wrappers/feature-icon/FeatureIconThree";
import BannerNine from "../../wrappers/banner/BannerNine";
import TabProductFive from "../../wrappers/product/TabProductFive";

const HomeCosmetics = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Cosmetics Home</title>
        <meta
          name="description"
          content="Cosmetics home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderEight />
        {/* tab product */}
        <TabProductFive
          spaceTopClass="pt-95"
          spaceBottomClass="pb-70"
          category="cosmetics"
        />
        {/* feature icon */}
        <FeatureIconThree
          spaceBottomClass="pb-70"
          featureShapeClass="support-shape-3"
        />
        {/* testimonial */}
        <TestimonialOne spaceBottomClass="pb-95" />
        {/* banner */}
        <BannerNine spaceBottomClass="pb-70" />
        {/* brand logo slider */}
        <BrandLogoSliderOne spaceBottomClass="pb-95" />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeCosmetics;
