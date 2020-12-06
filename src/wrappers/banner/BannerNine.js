import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-nine.json";
import BannerNineSingle from "../../components/banner/BannerNineSingle.js";

const BannerNine = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerNineSingle
                  data={single}
                  key={key}
                  spaceBottomClass="mb-30"
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

BannerNine.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerNine;
