import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutOne from "../../layouts/LayoutOne";
import BannerThirtyEight from "../../wrappers/banner/BannerThirtyEight";
import TabProductTwentyTwo from "../../wrappers/product/TabProductTwentyTwo";
import CountDownEight from "../../wrappers/countdown/CountDownEight";
import ProductSliderSix from "../../wrappers/product/ProductSliderSix";
import BrandLogoSliderFive from "../../wrappers/brand-logo/BrandLogoSliderFive";
import BannerThirtySeven from "../../wrappers/banner/BannerThirtySeven";
import HeroSliderThirtySix from "../../wrappers/hero-slider/HeroSliderThirtySix";

const HomeValentinesDay = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Valentines day Home</title>
        <meta
          name="description"
          content="Valentines day home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutOne headerTop="visible">
        {/* hero slider */}
        <HeroSliderThirtySix />
        {/* banner */}
        <BannerThirtyEight spaceBottomClass="pb-70" spaceTopClass="pt-100" />
        {/* tab product */}
        <TabProductTwentyTwo spaceBottomClass="pb-60" category="fashion" />
        {/* deal counter */}
        <CountDownEight
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="November 13, 2020 12:12:00"
          backgroundImage="/assets/img/bg/deal-bg.jpg"
        />
        {/* product slider */}
        <ProductSliderSix
          category="fashion"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
        <BannerThirtySeven spaceBottomClass="pb-85" />
        {/* brand logo */}
        <BrandLogoSliderFive spaceBottomClass="pb-100" />
      </LayoutOne>
    </Fragment>
  );
};

export default HomeValentinesDay;
