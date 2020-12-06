import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import LayoutFive from "../../layouts/LayoutFive";
import HeroSliderTwelve from "../../wrappers/hero-slider/HeroSliderTwelve";
import NewsletterTwo from "../../wrappers/newsletter/NewsletterTwo";
import ProductGridFiveContainer from "../../wrappers/product/ProductGridFiveContainer";

const HomeFashionFour = () => {
  return (
    <Fragment>
      <MetaTags>
        <title>Flone | Fashion Home</title>
        <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        />
      </MetaTags>
      <LayoutFive>
        {/* hero slider */}
        <HeroSliderTwelve />
        {/* product grid */}
        <ProductGridFiveContainer
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          category="accessories"
        />
        {/* newsletter */}
        <NewsletterTwo spaceBottomClass="pb-100" />
      </LayoutFive>
    </Fragment>
  );
};

export default HomeFashionFour;
