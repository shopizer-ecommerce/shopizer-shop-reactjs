import PropTypes from "prop-types";
import React, { Fragment, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useForm, Controller } from "react-hook-form";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";
import { useToasts } from "react-toast-notifications";
import { connect } from "react-redux";
import { getState } from "../../redux/actions/userAction";

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


const billingForm = {
  firstName: {
    name: "firstName",
    validate: {
      required: {
        value: true,
        message: "Firstname is required"
      }
    }
  },
  lastName: {
    name: "lastName",
    validate: {
      required: {
        value: true,
        message: "Lastname is required"
      }
    }
  },
  company: {
    name: "company"
  },
  address: {
    name: "address",
    validate: {
      required: {
        value: true,
        message: "Address is required"
      }
    }
  },
  city: {
    name: "city",
    validate: {
      required: {
        value: true,
        message: "City is required"
      }
    }
  },
  country: {
    name: "country",
    validate: {
      required: {
        value: true,
        message: "Country is required"
      }
    }
  },
  stateProvince: {
    name: "stateProvince",
    validate: {
      required: {
        value: true,
        message: "State is required"
      }
    }
  },
  postalCode: {
    name: "postalCode",
    validate: {
      required: {
        value: true,
        message: "Postal code is required"
      }
    }
  },
  phone: {
    name: "phone",
    validate: {
      required: {
        value: true,
        message: "Phone number is required"
      },
      minLength: {
        value: 10,
        message: "Enter a 10-digit number"
      }
    }
  },
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
  },
  shipPhone: {
    name: "shipPhone",
    validate: {
      required: {
        value: true,
        message: "Phone number is required"
      },
      minLength: {
        value: 10,
        message: "Enter a 10-digit number"
      }
    }
  },
  shipEmail: {
    name: "shipEmail",
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
  },
  shipFirstName: {
    name: "shipFirstName",
    validate: {
      required: {
        value: true,
        message: "Firstname is required"
      }
    }
  },
  shipLastName: {
    name: "shipLastName",
    validate: {
      required: {
        value: true,
        message: "Lastname is required"
      }
    }
  },
  shipCompany: {
    name: "shipCompany"
  },
  shipAddress: {
    name: "shipAddress",
    validate: {
      required: {
        value: true,
        message: "Address is required"
      }
    }
  },
  shipCity: {
    name: "shipCity",
    validate: {
      required: {
        value: true,
        message: "City is required"
      }
    }
  },
  shipCountry: {
    name: "shipCountry",
    validate: {
      required: {
        value: true,
        message: "Country is required"
      }
    }
  },
  shipStateProvince: {
    name: "shipStateProvince",
    validate: {
      required: {
        value: true,
        message: "State is required"
      }
    }
  },
  shipPostalCode: {
    name: "shipPostalCode",
    validate: {
      required: {
        value: true,
        message: "Postal code is required"
      }
    }
  },
}
const MyAccount = ({ location, setLoader, getState, countryData, stateData }) => {
  const { pathname } = location;
  const { addToast } = useToasts();
  const { register, handleSubmit, errors, watch, setError, clearErrors, reset } = useForm({
    mode: "onChange",
    criteriaMode: "all"
  });
  const {
    register: billingRef,
    errors: billingErr,
    handleSubmit: billingSubmit, control, setValue
  } = useForm({
    mode: "onChange"
  });

  useEffect(() => {
    getProfile()
    getState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getProfile = async () => {
    let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.PROFILE;
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        getState(response.billing.country)
        setValue('firstName', response.billing.firstName)
        setValue('lastName', response.billing.lastName)
        setValue('company', response.billing.company)
        setValue('address', response.billing.address)
        setValue('country', response.billing.country)
        setValue('city', response.billing.city)
        // setValue('stateProvince', response.billing.stateProvince)
        setValue('stateProvince', response.billing.zone)
        setValue('postalCode', response.billing.postalCode)
        setValue('phone', response.billing.phone)
        setValue('email', response.emailAddress)
      }
      //   // setConfig(response)
    }
    catch (error) {
    }
  }
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
  const onUpdateBilling = (data) => {
    console.log(data)
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
                            <form onSubmit={billingSubmit(onUpdateBilling)}>
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>First Name</label>
                                    <input type="text" name={billingForm.firstName.name} ref={billingRef(billingForm.firstName.validate)} />
                                    {billingErr[billingForm.firstName.name] && <p className="error-msg">{billingErr[billingForm.firstName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Last Name</label>
                                    <input type="text" name={billingForm.lastName.name} ref={billingRef(billingForm.lastName.validate)} />
                                    {billingErr[billingForm.lastName.name] && <p className="error-msg">{billingErr[billingForm.lastName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <label>Company Name</label>
                                    <input type="text" name={billingForm.company.name} ref={billingRef(billingForm.company.validate)} />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <label>Street Address</label>
                                    <input
                                      className="billing-info"
                                      placeholder="House number and street name"
                                      type="text"
                                      name={billingForm.address.name}
                                      ref={billingRef(billingForm.address.validate)}
                                    />
                                    {billingErr[billingForm.address.name] && <p className="error-msg">{billingErr[billingForm.address.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>Country</label>
                                    <Controller
                                      name={billingForm.country.name}
                                      control={control}
                                      rules={billingForm.country.validate}
                                      render={props => {
                                        return (
                                          <select onChange={(e) => { props.onChange(e.target.value); getState(e.target.value); }} value={props.value}>
                                            <option>Select a country</option>
                                            {

                                              countryData.map((data, i) => {
                                                return <option key={i} value={data.code}>{data.name}</option>
                                              })
                                            }
                                          </select>
                                        )
                                      }}
                                    />
                                    {billingErr[billingForm.country.name] && <p className="error-msg">{billingErr[billingForm.country.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>State</label>
                                    {
                                      stateData && stateData.length > 0 ?
                                        <Controller
                                          name={billingForm.stateProvince.name}
                                          control={control}
                                          rules={billingForm.stateProvince.validate}
                                          render={props => {
                                            return (
                                              <select onChange={(e) => props.onChange(e.target.value)} value={props.value}>
                                                <option>Select a state</option>
                                                {
                                                  stateData.map((data, i) => {
                                                    return <option key={i} value={data.code}>{data.name}</option>
                                                  })
                                                }
                                              </select>)
                                          }}
                                        />
                                        :
                                        <input type="text" name={billingForm.stateProvince.name} ref={billingRef(billingForm.stateProvince.validate)} />
                                    }
                                    {billingErr[billingForm.stateProvince.name] && <p className="error-msg">{billingErr[billingForm.stateProvince.name].message}</p>}

                                    {/* <input type="text" /> */}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>Town / City</label>
                                    <input type="text" name={billingForm.city.name} ref={billingRef(billingForm.city.validate)} />
                                    {billingErr[billingForm.city.name] && <p className="error-msg">{billingErr[billingForm.city.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>Postcode / ZIP</label>
                                    <input type="text" name={billingForm.postalCode.name} ref={billingRef(billingForm.postalCode.validate)} />
                                    {billingErr[billingForm.postalCode.name] && <p className="error-msg">{billingErr[billingForm.postalCode.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Email Address</label>
                                    <input type="email" name={billingForm.email.name} ref={billingRef(billingForm.email.validate)} />
                                    {billingErr[billingForm.email.name] && <p className="error-msg">{billingErr[billingForm.email.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Telephone</label>
                                    <input type="number" name={billingForm.phone.name} ref={billingRef(billingForm.phone.validate)} />
                                    {billingErr[billingForm.phone.name] && <p className="error-msg">{billingErr[billingForm.phone.name].message}</p>}
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
                            <form onSubmit={billingSubmit(onUpdateBilling)}>
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>First Name</label>
                                    <input type="text" name={billingForm.shipFirstName.name} ref={billingRef(billingForm.shipFirstName.validate)} />
                                    {billingErr[billingForm.shipFirstName.name] && <p className="error-msg">{billingErr[billingForm.shipFirstName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Last Name</label>
                                    <input type="text" name={billingForm.shipLastName.name} ref={billingRef(billingForm.shipLastName.validate)} />
                                    {billingErr[billingForm.shipLastName.name] && <p className="error-msg">{billingErr[billingForm.shipLastName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <label>Company Name</label>
                                    <input type="text" name={billingForm.shipCompany.name} ref={billingRef(billingForm.shipCompany.validate)} />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <label>Street Address</label>
                                    <input
                                      className="billing-info"
                                      placeholder="House number and street name"
                                      type="text"
                                      name={billingForm.shipAddress.name}
                                      ref={billingRef(billingForm.shipAddress.validate)}
                                    />
                                    {billingErr[billingForm.shipAddress.name] && <p className="error-msg">{billingErr[billingForm.shipAddress.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>Country</label>
                                    <Controller
                                      name={billingForm.shipCountry.name}
                                      control={control}
                                      rules={billingForm.shipCountry.validate}
                                      render={props => {
                                        return (
                                          <select onChange={(e) => { props.onChange(e.target.value); getState(e.target.value); }} value={props.value}>
                                            <option>Select a country</option>
                                            {

                                              countryData.map((data, i) => {
                                                return <option key={i} value={data.code}>{data.name}</option>
                                              })
                                            }
                                          </select>
                                        )
                                      }}
                                    />
                                    {billingErr[billingForm.shipCountry.name] && <p className="error-msg">{billingErr[billingForm.shipCountry.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>State</label>
                                    {
                                      stateData && stateData.length > 0 ?
                                        <Controller
                                          name={billingForm.shipStateProvince.name}
                                          control={control}
                                          rules={billingForm.shipStateProvince.validate}
                                          render={props => {
                                            return (
                                              <select onChange={(e) => props.onChange(e.target.value)} value={props.value}>
                                                <option>Select a state</option>
                                                {
                                                  stateData.map((data, i) => {
                                                    return <option key={i} value={data.code}>{data.name}</option>
                                                  })
                                                }
                                              </select>)
                                          }}
                                        />
                                        :
                                        <input type="text" name={billingForm.shipStateProvince.name} ref={billingRef(billingForm.shipStateProvince.validate)} />
                                    }
                                    {billingErr[billingForm.shipStateProvince.name] && <p className="error-msg">{billingErr[billingForm.shipStateProvince.name].message}</p>}

                                    {/* <input type="text" /> */}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>Town / City</label>
                                    <input type="text" name={billingForm.shipCity.name} ref={billingRef(billingForm.shipCity.validate)} />
                                    {billingErr[billingForm.shipCity.name] && <p className="error-msg">{billingErr[billingForm.shipCity.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>Postcode / ZIP</label>
                                    <input type="text" name={billingForm.shipPostalCode.name} ref={billingRef(billingForm.shipPostalCode.validate)} />
                                    {billingErr[billingForm.shipPostalCode.name] && <p className="error-msg">{billingErr[billingForm.shipPostalCode.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Email Address</label>
                                    <input type="email" name={billingForm.shipEmail.name} ref={billingRef(billingForm.shipEmail.validate)} />
                                    {billingErr[billingForm.shipEmail.name] && <p className="error-msg">{billingErr[billingForm.shipEmail.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Telephone</label>
                                    <input type="number" name={billingForm.shipPhone.name} ref={billingRef(billingForm.shipPhone.validate)} />
                                    {billingErr[billingForm.shipPhone.name] && <p className="error-msg">{billingErr[billingForm.shipPhone.name].message}</p>}
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
    countryData: state.userData.country,
    // cartItems: state.cartData.cartItems,
    // currentLocation: state.userData.currentAddress,
    stateData: state.userData.state
    // defaultStore: state.merchantData.defaultStore,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    },
    getState: (code) => {
      dispatch(getState(code));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(MyAccount);

// export default MyAccount;
