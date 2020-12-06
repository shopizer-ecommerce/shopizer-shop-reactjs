import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-eleven.json";
import BannerElevenSingle from "../../components/banner/BannerElevenSingle.js";

const BannerEleven = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="row no-gutters">
        {bannerData &&
          bannerData.map((single, key) => {
            return <BannerElevenSingle data={single} key={key} />;
          })}
      </div>
    </div>
  );
};

BannerEleven.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerEleven;
