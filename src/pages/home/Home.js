import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layouts/Layout";
import HeroSlider from "../../wrappers/hero-slider/HeroSlider";
import TabProduct from "../../wrappers/product/TabProduct";
// import BannerEleven from "../../wrappers/banner/BannerEleven";
// import CountDownThree from "../../wrappers/countdown/CountDownThree";
import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import Newsletter from "../../wrappers/newsletter/Newsletter";
import { connect } from "react-redux";
const Home = ({ merchant }) => {
  // console.log(merchant);
  return (
    <Fragment>
      <MetaTags>
        <title>{merchant.name}</title>
        {/* <meta
          name="description"
          content="Fashion home of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>
      <Layout
        headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible"
      >
        {/* hero slider */}
        <HeroSlider />
        {/* tab product */}
        <TabProduct
          category="fashion"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* banner */}
        {/*
        <BannerEleven />
        */}
        {/* countdown */}
        {/*
        <CountDownThree
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          dateTime="November 13, 2020 12:12:00"
          countDownImage="/assets/img/banner/deal-2.png"
        />
        */}
        {/* feature icon */}
        <FeatureIcon
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        {/* newsletter */}
        <Newsletter
          spaceTopClass="pt-100"
          spaceBottomClass="pb-100"
          subscribeBtnClass="dark-red-subscribe"
        />
      </Layout>
    </Fragment>
  );
};


const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};


export default connect(mapStateToProps, null)(Home);
// export default HomeFashionSeven;
