import PropTypes from "prop-types";
import React from "react";
// import { setActiveSort } from "../../helpers/product";

const ShopCategories = ({ categories, getCategoryParams, string }) => {
  return (
    <div className="sidebar-widget">
      <h4 className="pro-sidebar-title">{string["Categories"]}</h4>
      <div className="sidebar-widget-list mt-20">
        {categories.length > 0 ? (
          <ul>

            {categories.map((category, key) => {
              return (
                <li key={key}>
                  <div>

                    {/* <label>
                      <input
                        type="checkbox"
                        value={category.id}
                        name="category"
                        // checked={checkedOrNot(singleSize)}
                        onChange={(e) => {
                          getCategoryParams("category", category.id);
                        }}
                      />
                      <span className="checkmark" />{category.description.name}{" "}
                    </label> */}
                    <button
                      onClick={e => {
                        getCategoryParams("category", category);
                      }}> {category.description.name}
                    </button>
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
            "No categories found"
          )}
      </div>
    </div>
  );
};

ShopCategories.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopCategories;
