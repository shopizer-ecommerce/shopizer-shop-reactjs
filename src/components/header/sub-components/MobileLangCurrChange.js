import PropTypes from "prop-types";
import React from "react";
import { multilanguage, changeLanguage } from "redux-multilanguage";
import { connect } from "react-redux";
// import { setCurrency } from "../../../redux/actions/currencyActions";

const MobileLangCurrChange = ({
  // currency,
  // setCurrency,
  strings,
  currentLanguageCode,
  dispatch,
  merchant
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
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
          {merchant &&
            merchant.supportedLanguages.map((value, i) => {
              return (
                <option value={value.code} key={i}>{strings[value.code]}</option>
              )
            })
          }

        </select>
      </div>
    </div>
  );
};

MobileLangCurrChange.propTypes = {
  strings: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func
};

const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};

const mapDispatchToProps = dispatch => {
  return {
    // setCurrency: currencyName => {
    //   dispatch(setCurrency(currencyName));
    // }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(MobileLangCurrChange));
