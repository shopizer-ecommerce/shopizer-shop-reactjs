import PropTypes from "prop-types";
import React from "react";
import MailchimpSubscribe from "react-mailchimp-subscribe";

const CustomForm = ({ status, message, onValidated }) => {
  let email;
  const submit = () => {
    email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      });
    email.value = "";
  };

  return (
    <div className="subscribe-form-2">
      <div className="mc-form">
        <div>
          <input
            className="email"
            ref={node => (email = node)}
            type="email"
            placeholder="Your Email Address"
            required
          />
        </div>
        <div className="clear-2">
          <button className="button" onClick={submit}>
            <i className="fa fa-long-arrow-right"></i>
          </button>
        </div>
      </div>

      {status === "sending" && (
        <div style={{ color: "#3498db", fontSize: "12px" }}>sending...</div>
      )}
      {status === "error" && (
        <div
          style={{ color: "#e74c3c", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
      {status === "success" && (
        <div
          style={{ color: "#2ecc71", fontSize: "12px" }}
          dangerouslySetInnerHTML={{ __html: message }}
        />
      )}
    </div>
  );
};

const SubscribeEmail = ({ mailchimpUrl }) => {
  return (
    <div>
      <MailchimpSubscribe
        url={mailchimpUrl}
        render={({ subscribe, status, message }) => (
          <CustomForm
            status={status}
            message={message}
            onValidated={formData => subscribe(formData)}
          />
        )}
      />
    </div>
  );
};

SubscribeEmail.propTypes = {
  mailchimpUrl: PropTypes.string
};

export default SubscribeEmail;
