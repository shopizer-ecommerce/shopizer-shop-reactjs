import PropTypes from "prop-types";
import React from "react";
import { changeLanguage } from "redux-multilanguage";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
const LanguageCurrencyChanger = ({
  // currency,
  // setCurrency,
  strings,
  merchant,
  currentLanguageCode,
  dispatch
}) => {
  const changeLanguageTrigger = e => {
    const languageCode = e.target.value;
    dispatch(changeLanguage(languageCode));
  };

  // const setCurrencyTrigger = e => {
  //   const currencyName = e.target.value;
  //   setCurrency(currencyName);
  // };

  return (
    <div className="language-currency-wrap">
      <div className="same-language-currency language-style">
        <span>
          {currentLanguageCode === "en"
            ? "English"
            : currentLanguageCode === "fr"
              ? "French"

              : ""}{" "}
          <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            {merchant &&
              merchant.supportedLanguages.map((value, i) => {
                return (
                  <li key={i}>
                    <button value={value.code} onClick={e => changeLanguageTrigger(e)}>
                      {strings[value.code]}
                    </button>
                  </li>
                )
              })
            }

            {/* <li>
              <button value="fn" onClick={e => changeLanguageTrigger(e)}>
                French
              </button>
            </li>
            <li>
              <button value="de" onClick={e => changeLanguageTrigger(e)}>
                Germany
              </button>
            </li> */}
          </ul>
        </div>
      </div>
      {/* <div className="same-language-currency use-style">
        <span>
          {currency.currencyName} <i className="fa fa-angle-down" />
        </span>
        <div className="lang-car-dropdown">
          <ul>
            <li>
              <button value="USD" onClick={e => setCurrencyTrigger(e)}>
                USD
              </button>
            </li>
            <li>
              <button value="EUR" onClick={e => setCurrencyTrigger(e)}>
                EUR
              </button>
            </li>
            <li>
              <button value="GBP" onClick={e => setCurrencyTrigger(e)}>
                GBP
              </button>
            </li>
          </ul>
        </div>
      </div> */}
      <div className="same-language-currency">
        <p>{strings['Call Us']} : {merchant.phone}</p>
      </div>
    </div>
  );
};

LanguageCurrencyChanger.propTypes = {
  // setCurrency: PropTypes.func,
  // currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
  strings: PropTypes.object
};

const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};

const mapDispatchToProps = dispatch => {
  return {
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(multilanguage(LanguageCurrencyChanger));
// export default LanguageCurrencyChanger;
