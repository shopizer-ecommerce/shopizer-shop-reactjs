// import PropTypes from "prop-types";
import React from "react";
import CookieConsent from "react-cookie-consent";
import { connect } from "react-redux";
// import { multilanguage, loadLanguages } from "redux-multilanguage";
import { multilanguage } from "redux-multilanguage";

const Cookie = ({ strings }) => {

    return (
        <CookieConsent location="bottom" style={{ background: "#2B373B" }}
            buttonText={strings["Accept"]} buttonStyle={{ background: "#4e503b", color: "#fff", fontSize: "14px", padding: '10px 30px' }}>{strings["Cookie Consent"]}</CookieConsent>
    );
};

const mapStateToProps = state => {
    return {
        currentLanguageCode: state.multilanguage.currentLanguageCode,
    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(Cookie));

