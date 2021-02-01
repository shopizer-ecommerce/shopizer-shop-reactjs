import PropTypes from "prop-types";
import React from "react";
// import {
//   getIndividualCategories,
//   getIndividualTags,
//   getIndividualColors,
//   getProductsIndividualSizes
// } from "../../helpers/product";
// import ShopSearch from "../../components/product/ShopSearch";
import ShopCategories from "../../components/product/ShopCategories";
import ShopColor from "../../components/product/ShopColor";
import ShopSize from "../../components/product/ShopSize";
// import ShopTag from "../../components/product/ShopTag";
import ShopManufacture from "../../components/product/ShopManufacture";

const ShopSidebar = ({ string, getCategoryParams, getSortParams, sideSpaceClass, uniqueCategories, uniqueColors, uniqueSizes, uniqueManufacture }) => {
  // const uniqueCategories = getIndividualCategories(products);
  // const uniqueColors = getIndividualColors(products);
  // const uniqueSizes = getProductsIndividualSizes(products);
  // const uniqueTags = getIndividualTags(products);
  // debugger
  return (
    <div className={`sidebar-style ${sideSpaceClass ? sideSpaceClass : ""}`}>
      {/* shop search */}
      {/* <ShopSearch strings={strings} /> */}

      {/* filter by categories */}
      {
        uniqueCategories.length > 0 &&
        <ShopCategories string={string} categories={uniqueCategories} getCategoryParams={getCategoryParams} />
      }


      {/* filter by manufacture */}
      {
        uniqueManufacture.length > 0 &&
        <ShopManufacture string={string} manufactures={uniqueManufacture} getSortParams={getSortParams} />
      }


      {/* filter by color */}
      {
        uniqueColors.length > 0 &&
        <ShopColor string={string} colors={uniqueColors} getSortParams={getSortParams} />
      }


      {/* filter by size */}
      {
        uniqueSizes.length > 0 &&
        <ShopSize string={string} sizes={uniqueSizes} getSortParams={getSortParams} />
      }


      {/* filter by tag */}
      {/* <ShopTag tags={uniqueTags} getSortParams={getSortParams} /> */}
    </div>
  );
};

ShopSidebar.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array,
  sideSpaceClass: PropTypes.string
};

export default ShopSidebar;
