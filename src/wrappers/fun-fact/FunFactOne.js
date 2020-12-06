import PropTypes from "prop-types";
import React from "react";
import funFactData from "../../data/fun-fact/fun-fact-one.json";
import FunFactOneSingle from "../../components/fun-fact/FunFactOneSingle.js";

const FunFactOne = ({ spaceTopClass, spaceBottomClass, bgClass }) => {
  return (
    <div
      className={`funfact-area ${spaceTopClass ? spaceTopClass : ""} ${
        spaceBottomClass ? spaceBottomClass : ""
      } ${bgClass ? bgClass : ""}`}
    >
      <div className="container">
        <div className="row">
          {funFactData &&
            funFactData.map((single, key) => {
              return (
                <FunFactOneSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                  textAlignClass="text-center"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

FunFactOne.propTypes = {
  bgClass: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default FunFactOne;
