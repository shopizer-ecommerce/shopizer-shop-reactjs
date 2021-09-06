import PropTypes from "prop-types";
import React from "react";
import { multilanguage } from "redux-multilanguage";
import { connect } from "react-redux";
const HeaderMessage= ({

  strings,
  merchant,
  currentLanguageCode,
  dispatch
}) => {

   return (
    <div className="language-currency-wrap">
      <div className="same-language-currency" style = {{ padding : 15 }}>
        <p>{strings['Call Us']} : <a href="tel:{merchant.phone}">{merchant.phone}</a></p>
      </div>
    </div>
  );
};

HeaderMessage.propTypes = {
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
)(multilanguage(HeaderMessage));

