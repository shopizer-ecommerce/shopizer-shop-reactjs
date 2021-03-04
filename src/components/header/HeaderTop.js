import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
import WebService from '../../util/webService';
import constant from '../../util/constant';
// import { setCurrency } from "../../redux/actions/currencyActions";
import LanguageCurrencyChanger from "./sub-components/LanguageCurrencyChanger";

const HeaderTop = ({
  // currency,
  // setCurrency,
  strings,
  currentLanguageCode,
  dispatch,
  borderStyle
}) => {
  const [message, setMessage] = useState('')
  useEffect(() => {
    getContentMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**Home page hero content */
  const getContentMessage = async () => {
    let action = constant.ACTION.CONTENT + constant.ACTION.BOXES + constant.ACTION.HEADER_MESSAGE;
    try {
      let response = await WebService.get(action);
      if (response) {
        //console.log('Response -> ' + JSON.stringify(response));
        setMessage(response.description.description);
      }
    } catch (error) {
    }
  }
  return (
    <div
      className={`header-top-wap ${
        borderStyle === "fluid-border" ? "border-bottom" : ""
        }`}
    >
      <LanguageCurrencyChanger
        // currency={currency}
        // setCurrency={setCurrency}
        currentLanguageCode={currentLanguageCode}
        dispatch={dispatch}
      />
      <div className="header-offer">
        <p dangerouslySetInnerHTML={{ __html: message.replace(/>]]/g, "&gt;") }}>
          {/* {strings['Free delivery on order over']} {" "}
          <span>
            {'US$79.99'}
          </span> */}
        </p>
      </div>
    </div>
  );
};

HeaderTop.propTypes = {
  borderStyle: PropTypes.string,
  // setCurrency: PropTypes.func,
  // currency: PropTypes.object,
  currentLanguageCode: PropTypes.string,
  dispatch: PropTypes.func,
  strings: PropTypes.object
};

const mapStateToProps = state => {
  return {
    // currency: state.currencyData
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
)(multilanguage(HeaderTop));
