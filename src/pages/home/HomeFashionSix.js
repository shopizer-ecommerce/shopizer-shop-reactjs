import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutSeven from "../../layouts/LayoutSeven";
import HeroSliderFourteen from "../../wrappers/hero-slider/HeroSliderFourteen";
import SectionTitleWithText from "../../components/section-title/SectionTitleWithText";
import TabProductEight from "../../wrappers/product/TabProductEight";
import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import ImageSliderOne from "../../wrappers/image-slider/ImageSliderOne";

const HomeFashionSix = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutSeven>
        {/* hero slider */}
        <HeroSliderFourteen />
        {/* section title */}
        <SectionTitleWithText spaceTopClass="pt-95" spaceBottomClass="pb-90" />
        {/* tab product */}
        <TabProductEight
          spaceBottomClass="pb-70"
          category="fashion"
          sectionTitle={false}
        />
        {/* newsletter */}
        <NewsletterTwo spaceBottomClass="pb-100" />
        {/* image slider */}
        <ImageSliderOne />
      </LayoutSeven>
    </Fragment>
  );
};

export default HomeFashionSix;
