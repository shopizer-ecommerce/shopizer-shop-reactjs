import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import RelatedProductSlider from "../../wrappers/product/RelatedProductSlider";
import ProductDescriptionTab from "../../wrappers/product/ProductDescriptionTab";
import ProductImageDescription from "../../wrappers/product/ProductImageDescription";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";
const Product = ({ location, productID, currentLanguageCode, setLoader }) => {
  const { pathname } = location;
  const [productDetails, setProductDetails] = useState();
  const [productReview, setProductReview] = useState([]);

  useEffect(() => {
    getProductDetails();
    getReview();
  }, []);

  const getProductDetails = async () => {
    setLoader(true)
    let action = constant.ACTION.PRODUCTS + productID + '?lang=' + currentLanguageCode;
    try {
      let response = await WebService.get(action);
      // console.log(response);
      if (response) {
        setProductDetails(response)
        setLoader(false)
      }
    } catch (error) {
      setLoader(false)
    }
  }
  const getReview = async () => {
    let action = constant.ACTION.PRODUCTS + productID + '/reviews';
    try {
      let response = await WebService.get(action);
      // console.log(response);
      if (response) {
        setProductReview(response)
      }
    } catch (error) {
    }
  }
  return (
    <Fragment>
      <MetaTags>
        <title>Shopizer | Product</title>
        {/* <meta
          name="description"
          content="Product page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>

      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Shop Product
      </BreadcrumbsItem>

      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />

        {/* product description with image */}
        {
          productDetails &&
          <ProductImageDescription
            spaceTopClass="pt-100"
            spaceBottomClass="pb-100"
            product={productDetails}
          />
        }


        {/* product description tab */}
        {
          productDetails &&
          <ProductDescriptionTab
            spaceBottomClass="pb-90"
            product={productDetails}
            review={productReview}
          />
        }

        {/* related product slider */}
        {/* <RelatedProductSlider
          spaceBottomClass="pb-95"
          category={product.category[0]}
        /> */}
      </LayoutOne>
    </Fragment>
  );
};

Product.propTypes = {
  location: PropTypes.object,
  productID: PropTypes.string,
  currentLanguageCode: PropTypes.string,
};

const mapStateToProps = (state, ownProps) => {
  const itemId = ownProps.match.params.id;
  return {
    productID: itemId,
    currentLanguageCode: state.multilanguage.currentLanguageCode
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(Product);
