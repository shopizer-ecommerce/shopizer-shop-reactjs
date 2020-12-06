import PropTypes from "prop-types";
import React from "react";
import bannerData from "../../data/banner/banner-thirteen.json";
import BannerThirteenSingle from "../../components/banner/BannerThirteenSingle.js";

const BannerThirteen = ({ spaceBottomClass }) => {
  return (
    <div className={`banner-area ${spaceBottomClass ? spaceBottomClass : ""}`}>
      <div className="row no-gutters">
        {bannerData &&
          bannerData.map((single, key) => {
            return (
              <BannerThirteenSingle
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

BannerThirteen.propTypes = {
  spaceBottomClass: PropTypes.string
};

export default BannerThirteen;
