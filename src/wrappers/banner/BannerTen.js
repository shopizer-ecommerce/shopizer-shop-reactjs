import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-ten.json";
import BannerTenSingle from "../../components/banner/BannerTenSingle.js";

const BannerTen = ({ spaceTopClass, spaceBottomClass }) => {
  return (
    <div
      className={`banner-area banner-area-2 ${
        spaceTopClass ? spaceTopClass : ""
      } ${spaceBottomClass ? spaceBottomClass : ""}`}
    >
      <div className="container-fluid">
        <div className="custom-row-2">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerTenSingle
                  spaceBottomClass="mb-10"
                  data={single}
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

BannerTen.propTypes = {
  spaceBottomClass: PropTypes.string,
  spaceTopClass: PropTypes.string
};

export default BannerTen;
