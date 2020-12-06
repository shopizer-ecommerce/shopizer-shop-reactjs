import PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { setCurrency } from "../../redux/actions/currencyActions";
import { multilanguage } from "redux-multilanguage";
import Logo from "../../components/header/Logo";
import IconGroup from "../../components/header/IconGroup";
import NavMenu from "../../components/header/NavMenu";
import MobileMenu from "../../components/header/MobileMenu";
import LanguageCurrencyChanger from "../../components/header/sub-components/LanguageCurrencyChanger";

const HeaderThree = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const [scroll, setScroll] = useState(0);
  const [headerTop, setHeaderTop] = useState(0);

  useEffect(() => {
    const header = document.querySelector(".sticky-bar");
    setHeaderTop(header.offsetTop);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    setScroll(window.scrollY);
  };

  return (
    <header className="header-area clearfix header-hm8">
      <div className="header-top-area header-padding-2 d-lg-block d-none">
        <div className="container-fluid">
          <div className="header-top-wap">
            {/* language currency changer */}
            <LanguageCurrencyChanger
              currency={currency}
              setCurrency={setCurrency}
              currentLanguageCode={currentLanguageCode}
              dispatch={dispatch}
            />
            {/* Icon group */}
            <IconGroup />
          </div>
        </div>
      </div>
      <div
        className={`header-bottom sticky-bar header-res-padding header-padding-2 ${
          scroll > headerTop ? "stick" : ""
        }`}
      >
        <div className="container">
          <div className="row">
            <div className="col-xl-12 col-lg-12 col-6">
              <div className="center-menu-logo text-left text-lg-center">
                {/* header logo */}
                <Logo imageUrl="/assets/img/logo/logo.png" logoClass="logo" />
              </div>
            </div>
            <div className="col-6 d-block d-lg-none">
              {/* Icon group */}
              <IconGroup />
            </div>
            <div className="col-xl-12 col-lg-12 d-none d-lg-block">
              {/* Nav menu */}
              <NavMenu />
            </div>
          </div>
          {/* mobile menu */}
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

HeaderThree.propTypes = {
  setCurrency: PropTypes.func,
  currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    currency: state.currencyData
  };
};

const mapDispatchToProps = dispatch => {
  return {
    setCurrency: currencyName => {
      dispatch(setCurrency(currencyName));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(HeaderThree));
