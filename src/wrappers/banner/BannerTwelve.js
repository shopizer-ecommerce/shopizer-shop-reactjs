import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-twelve.json";
import BannerTwelveSingle from "../../components/banner/BannerTwelveSingle.js";

const BannerTwelve = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="row no-gutters">
        {bannerData &&
          bannerData.map((single, key) => {
            return (
              <BannerTwelveSingle
                data={single}
                key={key}
                spaceBottomClass="mb-30"
              />
            );
          })}
      </div>
    </div>
  );
};

BannerTwelve.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerTwelve;
