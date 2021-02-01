import PropTypes from "prop-types";
import React from "react";
// import { setActiveSort } from "../../helpers/product";

const ShopColor = ({ string, colors, getSortParams }) => {
  return (
    <div className="sidebar-widget mt-30">
      <h4 className="pro-sidebar-title">{string["Color"]}</h4>
      <div className="sidebar-widget-list mt-20">
        {colors.length > 0 ? (
          <ul>
            {colors.map((color, key) => {
              return (
                <li key={key}>
                  <div className="sidebar-widget-list-left">
                    <label>
                      <input
                        type="checkbox"
                        value={color.value}
                        name="color"
                        // checked={checkedOrNot(singleSize)}
                        onChange={() => {
                          getSortParams("color", color.value);
                        }}
                      />
                      <span className="checkmark" />{color.name}{" "}
                    </label>
                    {/* <button
                      onClick={e => {
                        getSortParams("optionValues", color.value);
                        setActiveSort(e);
                      }}
                    >
                      <span className="checkmark" /> {color.name}{" "}
                    </button> */}
                  </div>
                </li>
              );
            })}
          </ul>
        ) : (
            "No colors found"
          )}
      </div>
    </div>
  );
};

ShopColor.propTypes = {
  colors: PropTypes.array,
  getSortParams: PropTypes.func
};

export default ShopColor;
