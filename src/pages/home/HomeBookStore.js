import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutTwo from "../../layouts/LayoutTwo";
import FeatureIconFour from "../../wrappers/feature-icon/FeatureIconFour";
import SliderBanner from "../../wrappers/slider-banner/SliderBanner";
import TabProductFour from "../../wrappers/product/TabProductFour";
import CtaOne from "../../wrappers/cta/CtaOne";
import NewProductSlider from "../../wrappers/product/NewProductSlider";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import BrandLogoSliderTwo from "../../wrappers/brand-logo/BrandLogoSliderTwo";

const HomeBookStore = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Book Store Home</title>
        <meta
          name="description"
          content="Book store home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutTwo>
        {/* slider banner */}
        <SliderBanner />
        {/* feature icon */}
        <FeatureIconFour
          spaceBottomClass="pb-70"
          containerClass="container"
          responsiveClass="res-mrg-md-mt"
        />
        {/* tab product */}
        <TabProductFour category="book" productTabClass="product-tab-pink2" />
        {/* call to action */}
        <CtaOne
          spaceTopClass="pt-100"
          backgroundImage="/assets/img/bg/bg-5.jpg"
        />
        {/* new product slider */}
        <NewProductSlider
          spaceTopClass="pt-100"
          spaceBottomClass="pb-95"
          category="book"
          limit={6}
        />
        {/* brand logo slider */}
        <BrandLogoSliderTwo />
        {/* blog featured */}
        <BlogFeatured spaceTopClass="pt-95" spaceBottomClass="pb-55" />
      </LayoutTwo>
    </Fragment>
  );
};

export default HomeBookStore;
