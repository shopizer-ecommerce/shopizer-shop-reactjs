import React from "react";
import categoryData from "../../data/category/category-five.json";
import CategoryFiveSingle from "../../components/category/CategoryFiveSingle.js";

const CategoryFiveGrid = ({ spaceBottomClass }) => {
  return (
    <div
      className={`category-grid-area ${
        spaceBottomClass ? spaceBottomClass : ""
      }`}
    >
      <div className="container">
        <div className="row">
          {categoryData &&
            categoryData.map((single, key) => {
              return <CategoryFiveSingle data={single} key={key} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default CategoryFiveGrid;
