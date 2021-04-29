import PropTypes from "prop-types";
import React from "react";
// import { setActiveSort } from "../../helpers/product";

const ShopManufacture = ({ string, manufactures, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-30">
      <h4 className="pro-sidebar-title">{string["Styles"]}</h4>
      <div className="sidebar-widget-list mt-20">
        {manufactures.length > 0 ? (
          <ul>
            {manufactures.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <label>
                      <input
                        type="checkbox"
                        value={category.id}
                        name="manufacture"
                        // checked={checkedOrNot(singleSize)}
                        onChange={() => {
                          getSortParams("manufacturer", category.id);
                        }}
                      />
                      <span className="checkmark" />{category.description.name}{" "}
                    </label>
                    {/* <button
                      onClick={e => {
                        getSortParams("manufacturer", category.id);
                        setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category.description.name}{" "}
                    </button> */}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
            "No manufactures found"
          )}
      </div>
    </div>
  );
};

ShopManufacture.propTypes = {
  categories: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopManufacture;
