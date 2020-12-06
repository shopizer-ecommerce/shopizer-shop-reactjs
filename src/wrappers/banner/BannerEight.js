import React from "react";
import bannerData from "../../data/banner/banner-eight.json";
import BannerEightSingle from "../../components/banner/BannerEightSingle.js";

const BannerEight = () => {
  return (
    <div className="col-lg-4 col-md-12">
      <div className="row">
        {bannerData &&
          bannerData.map((single, key) => {
            return (
              <BannerEightSingle
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

export default BannerEight;
