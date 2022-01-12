import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import Layout from "../../layouts/Layout";
import HeroSlider from "../../wrappers/hero-slider/HeroSlider";
import TabProduct from "../../wrappers/product/TabProduct";
// import FeatureIcon from "../../wrappers/feature-icon/FeatureIcon";
import Promo from "../../wrappers/promos/Promos";
import Newsletter from "../../wrappers/newsletter/Newsletter";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
const Home = ({ merchant, strings }) => {
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
        <HeroSlider string={strings} />
        {/* promos */}
        <Promo
          bgImg=""
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        
        {/* tab product */}
        <TabProduct
          category="fashion"
          spaceBottomClass="pb-100"
          spaceTopClass="pt-100"
        />
        {/* feature icon 
        <FeatureIcon
          bgImg="/assets/img/bg/shape.png"
          containerClass="container-fluid"
          gutterClass="padding-10-row-col"
          spaceTopClass="pt-50"
          spaceBottomClass="pb-40"
        />
        */}
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


export default connect(mapStateToProps, null)(multilanguage(Home));
// export default HomeFashionSeven;
