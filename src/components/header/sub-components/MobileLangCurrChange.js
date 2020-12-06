import PropTypes from "prop-types";
import React from "react";
import { multilanguage, changeLanguage } from "redux-multilanguage";
import { connect } from "react-redux";
import { setCurrency } from "../../../redux/actions/currencyActions";

const MobileLangCurrChange = ({
  currency,
  setCurrency,
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  const setCurrencyTrigger = e => {
    const currencyName = e.target.value;
    setCurrency(currencyName);
  };

  const closeMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector(
      "#offcanvas-mobile-menu"
    );
    offcanvasMobileMenu.classList.remove("active");
  };

  return (
    <div className="mobile-menu-middle">
      <div className="lang-curr-style">
        <span className="title mb-2">Choose Language </span>
        <select
          value={currentLanguageCode}
          onChange={e => {
            changeLanguageTrigger(e);
            closeMobileMenu();
          }}
        >
          <option value="en">English</option>
          <option value="fn">French</option>
          <option value="de">Germany</option>
        </select>
      </div>
      <div className="lang-curr-style">
        <span className="title mb-2">Choose Currency</span>
        <select
          value={currency.currencyName}
          onChange={e => {
            setCurrencyTrigger(e);
            closeMobileMenu();
          }}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
        </select>
      </div>
    </div>
  );
};

MobileLangCurrChange.propTypes = {
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
)(multilanguage(MobileLangCurrChange));
