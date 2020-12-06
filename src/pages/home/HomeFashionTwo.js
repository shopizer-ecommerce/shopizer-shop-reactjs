import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import BannerOne from "../../wrappers/banner/BannerOne";
import BlogFeatured from "../../wrappers/blog-featured/BlogFeatured";
import HeroSliderNine from "../../wrappers/hero-slider/HeroSliderNine";
import TabProductFive from "../../wrappers/product/TabProductFive";

const HomeFashionTwo = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
      >
        {/* hero slider */}
        <HeroSliderNine spaceLeftClass="ml-70" spaceRightClass="mr-70" />
        {/* banner */}
        <BannerOne spaceTopClass="pt-60" spaceBottomClass="pb-65" />
        {/* tab product */}
        <TabProductFive spaceBottomClass="pb-60" category="accessories" />
        {/* blog featured */}
        <BlogFeatured spaceBottomClass="pb-55" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeFashionTwo;
