import PropTypes from "prop-types";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import WebService from '../../util/webService';
import constant from '../../util/constant';

const subScribeForm = {
  email: {
    name: "email",
    validate: {
      required: {
        value: true,
        message: "Email is required"
      },
      pattern: {
        value: /^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i,
        message: 'Please entered the valid email id'
      }
    }
  }
}
const CustomForm = ({
  // status,
  // message,
  // onValidated,
  spaceTopClass,
  subscribeBtnClass,
  buttonLabel,
  emailPlaceHolder,
  sendingPlaceHolder,
  confirmationPlaceHolder
}) => {
  const [status, setStatus] = useState('');
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onChange",
    defaultValues: { email: "" },
    criteriaMode: "all"
  });
  const onSubmit = async (data) => {
    setStatus('sending')
    try {
      let action = constant.ACTION.NEWSLETTER;
      let param = { "email": data.email }
      let response = await WebService.post(action, param);
      //console.log(response)
      // if (response) {
      reset({ email: '' })
      setStatus('success')

      // setStatus('error')
    } catch (error) {
      setStatus('error')
    }
  };

  return (
    <div className={`subscribe-form-3 ${spaceTopClass ? spaceTopClass : ""}`}>
      <form onSubmit={handleSubmit(onSubmit)} >
        <div className="mc-form">
          <div>
            <input
              className="email"
              name={subScribeForm.email.name}
              ref={register(subScribeForm.email.validate)}
              type="email"
              placeholder={emailPlaceHolder}
            />
            {errors[subScribeForm.email.name] && <p className="error-msg">{errors[subScribeForm.email.name].message}</p>}
          </div>

          {status === "sending" && (
            <div style={{ color: "#3498db", fontSize: "12px" }}>{sendingPlaceHolder}</div>
          )}
          {status === "error" && (
            <div
              style={{ color: "#e74c3c", fontSize: "12px" }}
              dangerouslySetInnerHTML={{ __html: 'Error' }}
            />
          )}
          {status === "success" && (
            <div
              style={{ color: "#2ecc71", fontSize: "12px" }}
              dangerouslySetInnerHTML={{ __html: {confirmationPlaceHolder} }}
            />
          )}
          <div className={`clear-3 ${subscribeBtnClass ? subscribeBtnClass : ""}`} >
            <button className="button">
              {buttonLabel}
          </button>
          </div>
        </div>
      </form>
    </div>
  );
};

const SubscribeEmailTwo = ({
  spaceTopClass,
  subscribeBtnClass,
  strings,
}) => {
  return (
    <div>
      <CustomForm
        spaceTopClass={spaceTopClass}
        subscribeBtnClass={subscribeBtnClass}
        buttonLabel={strings["Subscribe"]}
        emailPlaceHolder={strings["Email address"]}
        sendingPlaceHolder={strings["Sending"]}
        confirmationPlaceHolder={strings["Subscribe confirmation"]}
      />
    </div>
  );
};

SubscribeEmailTwo.propTypes = {
  spaceTopClass: PropTypes.string
};

export default SubscribeEmailTwo;
