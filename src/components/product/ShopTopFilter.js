import PropTypes from "prop-types";
import React from "react";
import {
  getIndividualCategories,
  getIndividualTags,
  getIndividualColors,
  getProductsIndividualSizes,
  setActiveSort
} from "../../helpers/product";

const ShopTopFilter = ({ products, getSortParams }) => {
  const uniqueCategories = getIndividualCategories(products);
  const uniqueColors = getIndividualColors(products);
  const uniqueSizes = getProductsIndividualSizes(products);
  const uniqueTags = getIndividualTags(products);

  return (
    <div className="product-filter-wrapper" id="product-filter-wrapper">
      <div className="product-filter-wrapper__inner">
        <div className="row">
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Categories</h5>
              {uniqueCategories ? (
                <ul>
                  {uniqueCategories.map((category, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("category", category);
                            setActiveSort(e);
                          }}
                        >
                          {category}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No categories found"
              )}
            </div>
          </div>

          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Color</h5>
              {uniqueColors ? (
                <ul>
                  {uniqueColors.map((color, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("color", color);
                            setActiveSort(e);
                          }}
                        >
                          {color}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No colors found"
              )}
            </div>
          </div>
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter">
              <h5>Size</h5>
              {uniqueSizes ? (
                <ul>
                  {uniqueSizes.map((size, key) => {
                    return (
                      <li key={key}>
                        <button
                          className="text-uppercase"
                          onClick={e => {
                            getSortParams("size", size);
                            setActiveSort(e);
                          }}
                        >
                          {size}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No sizes found"
              )}
            </div>
          </div>
          {/* Product Filter */}
          <div className="col-md-3 col-sm-6 col-xs-12 mb-30">
            <div className="product-filter product-filter--tag">
              <h5>Tag</h5>
              {uniqueTags ? (
                <ul>
                  {uniqueTags.map((tag, key) => {
                    return (
                      <li key={key}>
                        <button
                          onClick={e => {
                            getSortParams("tag", tag);
                            setActiveSort(e);
                          }}
                        >
                          {tag}
                        </button>
                      </li>
                    );
                  })}
                </ul>
              ) : (
                "No tags found"
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ShopTopFilter.propTypes = {
  getSortParams: PropTypes.func,
  products: PropTypes.array
};

export default ShopTopFilter;
