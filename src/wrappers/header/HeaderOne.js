import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
import Logo from "../../components/header/Logo";
import NavMenu from "../../components/header/NavMenu";
import IconGroup from "../../components/header/IconGroup";
import MobileMenu from "../../components/header/MobileMenu";
import HeaderTop from "../../components/header/HeaderTop";
import WebService from '../../util/webService';
import constant from '../../util/constant';
// import { setLocalData } from '../../util/helper';
import { setMerchant } from "../../redux/actions/storeAction";
const HeaderOne = ({
  setMerchant,
  merchant,
  layout,
  top,
  borderStyle,
  headerPaddingClass,
  headerPositionClass,
  headerBgClass
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);
  const [categoryData, setCategoryData] = useState([]);
  const [contentData, setContentData] = useState([]);

  useEffect(() => {
    setMerchant()
    getCategoryHierarchy();
    getContent();
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };

  }, []);

  const getCategoryHierarchy = async () => {
    let action = constant.ACTION.CATEGORY + '?count=20&page=0';
    try {
      let response = await WebService.get(action);
      if (response) {
        setCategoryData(response.categories);
      }
    } catch (error) {
    }


  }
  const getContent = async () => {
    let action = constant.ACTION.CONTENT + constant.ACTION.PAGES;
    try {
      let response = await WebService.get(action);
      if (response) {
        setContentData(response)
      }
    } catch (error) {
    }
  }
  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header
      className={`header-area clearfix ${headerBgClass ? headerBgClass : ""} ${headerPositionClass ? headerPositionClass : ""}`}>
      <div
        className={`${headerPaddingClass ? headerPaddingClass : ""} ${
          top === "visible" ? "d-none d-lg-block" : "d-none"} header-top-area ${
          borderStyle === "fluid-border" ? "border-none" : ""}`}>
        <div className={layout === "container-fluid" ? layout : "container"}>
          {/* header top */}
          <HeaderTop borderStyle={borderStyle} />
        </div>
      </div>

      <div
        className={`${
          headerPaddingClass ? headerPaddingClass : ""
          } sticky-bar header-res-padding clearfix ${
          scroll > headerTop ? "stick" : ""
          }`}
      >
        <div className={layout === "container-fluid" ? layout : "container"}>
          <div className="row">
            <div className="col-xl-2 col-lg-2 col-md-6 col-4">
              {/* header logo */}
              {
                merchant.logo != null && <Logo imageUrl={merchant.logo.path} logoClass="logo" />
              }

            </div>
            <div className="col-xl-8 col-lg-8 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu categories={categoryData} contents={contentData} />
            </div>
            <div className="col-xl-2 col-lg-2 col-md-6 col-8">
              {/* Icon group */}
              <IconGroup />
            </div>
          </div>
        </div>
        {/* mobile menu */}
        <MobileMenu />
      </div>
    </header>
  );
};

HeaderOne.propTypes = {
  // merchant: PropTypes.string,
  borderStyle: PropTypes.string,
  headerPaddingClass: PropTypes.string,
  headerPositionClass: PropTypes.string,
  layout: PropTypes.string,
  top: PropTypes.string,
  // setMerchant: PropTypes.func
};

const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setMerchant: () => {
      dispatch(setMerchant());
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(HeaderOne));

// export default HeaderOne;
