import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-twenty.json";
import BannerTwentySingle from "../../components/banner/BannerTwentySingle.js";

const BannerTwenty = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="row no-gutters">
        {bannerData &&
          bannerData.map((single, key) => {
            return <BannerTwentySingle data={single} key={key} />;
          })}
      </div>
    </div>
  );
};

BannerTwenty.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerTwenty;
