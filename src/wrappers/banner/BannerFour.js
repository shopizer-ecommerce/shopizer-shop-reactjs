import React from "react";
import bannerData from "../../data/banner/banner-four.json";
import BannerFourSingle from "../../components/banner/BannerFourSingle.js";

const BannerFour = () => {
  return (
    <div className="banner-area bg-gray-2">
      <div className="container">
        <div className="row">
          {bannerData &&
            bannerData.map((single, key) => {
              return (
                <BannerFourSingle
                  data={single}
                  spaceBottomClass="mb-30"
                  key={key}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default BannerFour;
