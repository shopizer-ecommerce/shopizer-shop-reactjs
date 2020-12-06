import PropTypes from "prop-types";
import React from "react";
import ProductGridFive from "./ProductGridFive";

const ProductGridFiveContainer = ({
  spaceTopClass,
  spaceBottomClass,
  category
}) => {
  return (
    <div
      className={`product-area hm5-section-padding ${
        spaceTopClass ? spaceTopClass : ""
      }  ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="row">
          <ProductGridFive
            category={category}
            limit={12}
            spaceBottomClass="mb-20"
          />
        </div>
      </div>
    </div>
  );
};

ProductGridFiveContainer.propTypes = {
  category: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default ProductGridFiveContainer;
