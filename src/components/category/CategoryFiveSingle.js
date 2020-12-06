import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

const CategoryFiveSingle = ({ data }) => {
  return (
    <div className="col-lg-4 col-md-6 mb-30">
      <div className="category-grid">
        <div className="category-grid__image">
          <Link to={process.env.PUBLIC_URL + data.url}>
            <img
              src={process.env.PUBLIC_URL + data.image}
              alt=""
              className="img-fluid"
            />
          </Link>
        </div>
        <div className="category-grid__content">
          <Link to={process.env.PUBLIC_URL + data.url}>{data.title}</Link>
        </div>
      </div>
    </div>
  );
};

CategoryFiveSingle.propTypes = {
  data: PropTypes.object
};

export default CategoryFiveSingle;
