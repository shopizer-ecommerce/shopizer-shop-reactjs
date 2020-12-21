import PropTypes from "prop-types";
import React from "react";
import { setActiveSort } from "../../helpers/product";

const ShopManufacture = ({ manufactures, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-50">
      <h4 className="pro-sidebar-title">Manufactures</h4>
      <div className="sidebar-widget-list mt-20">
        {manufactures.length > 0 ? (
          <ul>
            {/* <li>
              <div className="sidebar-widget-list-left">
                <button
                // onClick={e => {
                //   getSortParams("category", "");
                //   setActiveSort(e);
                // }}
                >
                  <span className="checkmark" /> All Manufactures
                </button>
              </div>
            </li> */}
            {manufactures.map((category, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <button
                      onClick={e => {
                        getSortParams("manufacturer", category.id);
                        setActiveSort(e);
                      }}
                    >
                      {" "}
                      <span className="checkmark" /> {category.description.name}{" "}
                    </button>
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
