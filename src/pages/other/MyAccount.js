import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useForm } from "react-hook-form";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";

const changePasswordForm = {
  userName: {
    name: "userName",
    validate: {
      required: {
        value: true,
        message: "User Name is required"
      }
    }
  },
  currentPassword: {
    name: "currentPassword",
    validate: {
      required: {
        value: true,
        message: "Current Password is required"
      }
    }
  },
  password: {
    name: "password",
    validate: {
      required: {
        value: true,
        message: "Password is required"
      },
      validate: {
        hasSpecialChar: (value) => (value && value.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,16}$/)) || 'Password must be minimum of 8 characters atleast one number and one special character'
      }
    }
  },
  repeatPassword: {
    name: "repeatPassword",
    validate: {
      required: {
        value: true,
        message: "Repeat Password is required"
      }
    }
  }
}
const MyAccount = ({ location, setLoader }) => {
  const { pathname } = location;
  const { addToast } = useToasts();
  const { register, handleSubmit, errors, watch, setError, clearErrors, reset } = useForm({
    mode: "onChange"
  });
  const onChangePassword = async (data) => {
    setLoader(true)
    try {
      let action = constant.ACTION.CUSTOMER + constant.ACTION.PASSWORD;
      let param = {
        "password": data.password,
        "repeatPassword": data.repeatPassword,
        "current": data.currentPassword,
        "username": data.userName,
      }
      let response = await WebService.post(action, param);
      if (response) {
        reset({})
        addToast("Your password has been changed successfully!", { appearance: "success", autoDismiss: true });
      }
      setLoader(false)
    } catch (error) {
      addToast("Your current password is wrong", { appearance: "error", autoDismiss: true });
      setLoader(false)
    }
  }
  const onConfirmPassword = (e) => {
    if (watch('password') !== e.target.value) {
      return setError(
        changePasswordForm.repeatPassword.name,
        {
          type: "notMatch",
          message: "Repeat Password should be the same as a password"
        }
      );
    }

  }
  const onPasswordChange = (e) => {
    if (watch('repeatPassword') !== '' && watch('repeatPassword') !== e.target.value) {
      return setError(
        changePasswordForm.repeatPassword.name,
        {
          type: "notMatch",
          message: "Repeat Password should be the same as a password"
        }
      );

    } else {
      clearErrors(changePasswordForm.repeatPassword.name);
    }

  }
  return (
    <Fragment>
      <MetaTags>
        <title>Shopizer | My Account</title>
        {/* <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        My Account
      </BreadcrumbsItem>
      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="myaccount-area pb-80 pt-100">
          <div className="container">
            <div className="row">
              <div className="ml-auto mr-auto col-lg-9">
                <div className="myaccount-wrapper">
                  <Accordion defaultActiveKey="0">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>1 .</span> Billing Address{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Billing Information</h4>
                              {/* <h5>Your Personal Details</h5> */}
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="billing-info mb-20">
                                  <label>Company Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="billing-info mb-20">
                                  <label>Street Address</label>
                                  <input
                                    className="billing-info"
                                    placeholder="House number and street name"
                                    type="text"
                                  />
                                  <input
                                    placeholder="Apartment, suite, unit etc."
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>Country</label>
                                  <select>
                                    <option>Select a country</option>
                                    <option>Azerbaijan</option>
                                    <option>Bahamas</option>
                                    <option>Bahrain</option>
                                    <option>Bangladesh</option>
                                    <option>Barbados</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>State</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>Town / City</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>Postcode / ZIP</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input type="email" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Telephone</label>
                                  <input type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="1">
                          <h3 className="panel-title">
                            <span>2 .</span> Delivery Address{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Delivery Information</h4>
                              {/* <h5>Your Personal Details</h5> */}
                            </div>
                            <div className="row">
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>First Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Last Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="billing-info mb-20">
                                  <label>Company Name</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-12">
                                <div className="billing-info mb-20">
                                  <label>Street Address</label>
                                  <input
                                    className="billing-info"
                                    placeholder="House number and street name"
                                    type="text"
                                  />
                                  <input
                                    placeholder="Apartment, suite, unit etc."
                                    type="text"
                                  />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>Country</label>
                                  <select>
                                    <option>Select a country</option>
                                    <option>Azerbaijan</option>
                                    <option>Bahamas</option>
                                    <option>Bahrain</option>
                                    <option>Bangladesh</option>
                                    <option>Barbados</option>
                                  </select>
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>State</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>Town / City</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info mb-20">
                                  <label>Postcode / ZIP</label>
                                  <input type="text" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Email Address</label>
                                  <input type="email" />
                                </div>
                              </div>
                              <div className="col-lg-6 col-md-6">
                                <div className="billing-info">
                                  <label>Telephone</label>
                                  <input type="text" />
                                </div>
                              </div>
                            </div>
                            <div className="billing-back-btn">
                              <div className="billing-btn">
                                <button type="submit">Continue</button>
                              </div>
                            </div>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="2">
                          <h3 className="panel-title">
                            <span>2 .</span> Change your password
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>Change Password</h4>
                            </div>
                            <form onSubmit={handleSubmit(onChangePassword)}>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>User Name</label>
                                    <input type="text" name={changePasswordForm.userName.name} ref={register(changePasswordForm.userName.validate)} />
                                    {errors[changePasswordForm.userName.name] && <p className="error-msg">{errors[changePasswordForm.userName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Current Password</label>
                                    <input type="password" name={changePasswordForm.currentPassword.name} ref={register(changePasswordForm.currentPassword.validate)} />
                                    {errors[changePasswordForm.currentPassword.name] && <p className="error-msg">{errors[changePasswordForm.currentPassword.name].message}</p>}

                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Password</label>
                                    <input type="password" onChange={(e) => onPasswordChange(e)} name={changePasswordForm.password.name} ref={register(changePasswordForm.password.validate)} />
                                    {errors[changePasswordForm.password.name] && <p className="error-msg">{errors[changePasswordForm.password.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>Repeat Password</label>
                                    <input type="password" onChange={(e) => onConfirmPassword(e)} name={changePasswordForm.repeatPassword.name} ref={register(changePasswordForm.repeatPassword.validate)} />
                                    {errors[changePasswordForm.repeatPassword.name] && <p className="error-msg">{errors[changePasswordForm.repeatPassword.name].message}</p>}
                                  </div>
                                </div>
                              </div>

                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">Continue</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                  </Accordion>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment >
  );
};

MyAccount.propTypes = {
  location: PropTypes.object
};
const mapStateToProps = (state) => {
  return {
    // countryData: state.userData.country,
    // cartItems: state.cartData.cartItems,
    // currentLocation: state.userData.currentAddress,
    // stateData: state.userData.state,
    // defaultStore: state.merchantData.defaultStore,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);

// export default MyAccount;
