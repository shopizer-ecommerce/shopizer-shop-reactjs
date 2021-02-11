import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
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
import { getState, getShippingState } from "../../redux/actions/userAction";
import Script from 'react-load-script';
import { multilanguage } from "redux-multilanguage";
import SweetAlert from 'react-bootstrap-sweetalert';
import { deleteAllFromCart } from "../../redux/actions/cartActions";
import { setUser } from "../../redux/actions/userAction";
import { setLocalData } from '../../util/helper';
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

const accountForm = {
  username: {
    name: "username",
    validate: {
      required: {
        value: true,
        message: "User Name is required"
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
const MyAccount = ({ setUser, deleteAllFromCart, merchant, strings, location, setLoader, getState, getShippingState, countryData, stateData, shipStateData, userData }) => {
  const { pathname } = location;
  const { addToast } = useToasts();
  const history = useHistory();
  const [isDeleted, setIsDeleted] = useState(false)
  const { register, handleSubmit, errors, watch, setError, clearErrors, reset } = useForm({
    mode: "onChange",
    criteriaMode: "all"
  });
  const {
    register: billingRef,
    errors: billingErr,
    handleSubmit: billingSubmit,
    control, setValue
  } = useForm({
    mode: "onChange"
  });
  const {
    register: deliveryRef,
    errors: deliveryErr,
    handleSubmit: deliverySubmit,
    control: deliveryControl,
    setValue: setDeliveryValue
  } = useForm({
    mode: "onChange"
  });
  const {
    register: accountRef,
    errors: accountErr,
    handleSubmit: accountSubmit,
    // control: accountControl,
    setValue: setAccountValue,
    // watch: deliveryWatch,
  } = useForm({
    mode: "onChange"
  });

  useEffect(() => {
    getProfile()
    getState()
    getShippingState()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  const getProfile = async () => {
    let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.PROFILE;
    try {
      let response = await WebService.get(action);
      console.log(response);
      if (response) {
        setAccountValue('username', response.userName)
        setAccountValue('email', response.emailAddress)
        getState(response.billing.country)
        setValue('firstName', response.billing.firstName)
        setValue('lastName', response.billing.lastName)
        setValue('company', response.billing.company)
        setValue('address', response.billing.address)
        setValue('country', response.billing.country)
        setValue('city', response.billing.city)
        // setValue('stateProvince', response.billing.stateProvince)
        setTimeout(() => {
          setValue('stateProvince', response.billing.zone)
        }, 2000)
        setValue('postalCode', response.billing.postalCode)
        setValue('phone', response.billing.phone)
        setValue('email', response.emailAddress)
        if (response.delivery) {
          getShippingState(response.delivery.country)
          setDeliveryValue('shipFirstName', response.delivery.firstName)
          setDeliveryValue('shipLastName', response.delivery.lastName)
          setDeliveryValue('shipCompany', response.delivery.company)
          setDeliveryValue('shipAddress', response.delivery.address)
          setDeliveryValue('shipCountry', response.delivery.country)
          setDeliveryValue('shipCity', response.delivery.city)
          // setValue('stateProvince', response.billing.stateProvince)
          setTimeout(() => {
            setDeliveryValue('shipStateProvince', response.delivery.zone)
          }, 2000)

          setDeliveryValue('shipPostalCode', response.delivery.postalCode)
          setDeliveryValue('shipPhone', response.delivery.phone)
          // setValue('email', response.emailAddress)
        }
      }
      //   // setConfig(response)
    }
    catch (error) {
      history.push('/login')
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

  const handleScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ['address'],
    };
    // console.log('fsdfsdfsdfdsf')
    // Initialize Google Autocomplete
    /*global google*/ // To disable any eslint 'google not defined' errors
    let autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete'),
      options,
    );
    // console.log(autocomplete)
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    // this.autocomplete.setFields(['address_components', 'formatted_address']);

    // Fire Event when a suggested name is selected
    autocomplete.addListener('place_changed', () => {
      let p = autocomplete.getPlace();
      // console.log(p);
      setValue('country', p.address_components.find(i => i.types.some(i => i === "country")).short_name)
      getState(p.address_components.find(i => i.types.some(i => i === "country")).short_name)

      let city = p.address_components.find(i => i.types.some(i => i === "locality"))
      if (city !== undefined) {
        setValue('city', city.short_name)
      }
      let pCode = p.address_components.find(i => i.types.some(i => i === "postal_code"))
      if (pCode !== undefined) {
        setValue('postalCode', pCode.long_name)
      }

      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        sublocality: 'sublocality'
      };
      let array = [];
      for (var i = 0; i < p.address_components.length; i++) {
        var addressType = p.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = p.address_components[i][componentForm[addressType]];
          array.push(val);

        }
      }
      setValue('address', array.toString())
      setTimeout(() => {
        setValue('stateProvince', p.address_components.find(i => i.types.some(i => i === "administrative_area_level_1")).short_name)
      }, 2000);

    });
  }
  const handleDeliveryScriptLoad = () => {
    // Declare Options For Autocomplete
    const options = {
      types: ['address'],
    };
    // console.log('fsdfsdfsdfdsf')
    // Initialize Google Autocomplete

    let autocomplete = new google.maps.places.Autocomplete(
      document.getElementById('autocomplete1'),
      options,
    );
    // console.log(autocomplete)
    // Avoid paying for data that you don't need by restricting the set of
    // place fields that are returned to just the address components and formatted
    // address.
    // this.autocomplete.setFields(['address_components', 'formatted_address']);

    // Fire Event when a suggested name is selected
    autocomplete.addListener('place_changed', () => {
      let p = autocomplete.getPlace();
      console.log(p);
      setDeliveryValue('shipCountry', p.address_components.find(i => i.types.some(i => i === "country")).short_name)
      getShippingState(p.address_components.find(i => i.types.some(i => i === "country")).short_name)

      let city = p.address_components.find(i => i.types.some(i => i === "locality"))
      if (city !== undefined) {
        setDeliveryValue('shipCity', city.short_name)
      }
      let pCode = p.address_components.find(i => i.types.some(i => i === "postal_code"))
      if (pCode !== undefined) {
        setDeliveryValue('shipPostalCode', pCode.long_name)
      }

      var componentForm = {
        street_number: 'short_name',
        route: 'long_name',
        sublocality: 'sublocality'
      };
      let array = [];
      for (var i = 0; i < p.address_components.length; i++) {
        var addressType = p.address_components[i].types[0];
        if (componentForm[addressType]) {
          var val = p.address_components[i][componentForm[addressType]];
          array.push(val);

        }
      }
      setDeliveryValue('shipAddress', array.toString())
      setTimeout(() => {
        setDeliveryValue('shipStateProvince', p.address_components.find(i => i.types.some(i => i === "administrative_area_level_1")).short_name)
      }, 2000);
    });
  }

  const onUpdateBilling = async (data) => {
    // console.log(data)
    setLoader(true)
    try {
      let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.ADDRESS;
      let param = {
        "id": userData.id,
        "billing": {
          "company": data.company,
          "address": data.address,
          "city": data.city,
          "postalCode": data.postalCode,
          "stateProvince": data.stateProvince,
          "country": data.country,
          "zone": data.stateProvince,
          "firstName": data.firstName,
          "lastName": data.lastName,
          "phone": data.phone
        }
        // "delivery": {
        //   "company": deliveryWatch('shipCompany'),
        //   "address": deliveryWatch('shipAddress'),
        //   "city": deliveryWatch('shipCity'),
        //   "postalCode": deliveryWatch('shipPostalCode'),
        //   "stateProvince": deliveryWatch('shipStateProvince'),
        //   "country": deliveryWatch('shipCountry'),
        //   "zone": deliveryWatch('shipStateProvince'),
        //   "firstName": deliveryWatch('shipFirstName'),
        //   "lastName": deliveryWatch('shipLastName'),
        //   "phone": deliveryWatch('shipPhone')
        // }
      }
      // console.log(param);
      await WebService.patch(action, param);
      // if (response) {
      // reset({})
      addToast("Your billing address has been updated successfully.", { appearance: "success", autoDismiss: true });
      // }
      setLoader(false)
    } catch (error) {
      addToast("Your billing address has been updated fail.", { appearance: "error", autoDismiss: true });
      setLoader(false)
    }
  }
  const onUpdateDelivery = async (data) => {
    setLoader(true)
    try {
      let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER + constant.ACTION.ADDRESS;
      let param = {
        "id": userData.id,
        // "billing": {
        //   "company": billingWatch('company'),
        //   "address": billingWatch('address'),
        //   "city": billingWatch('city'),
        //   "postalCode": billingWatch('postalCode'),
        //   "stateProvince": billingWatch('stateProvince'),
        //   "country": billingWatch('country'),
        //   "zone": billingWatch('stateProvince'),
        //   "firstName": billingWatch('firstName'),
        //   "lastName": billingWatch('lastName'),
        //   "phone": billingWatch('phone')
        // },
        "delivery": {
          "company": data.shipCompany,
          "address": data.shipAddress,
          "city": data.shipCity,
          "postalCode": data.shipPostalCode,
          "stateProvince": data.shipStateProvince,
          "country": data.shipCountry,
          "zone": data.shipStateProvince,
          "firstName": data.shipFirstName,
          "lastName": data.shipLastName,
          "phone": data.shipPhone
        }
      }
      console.log(param);
      await WebService.patch(action, param);
      // if (response) {
      // reset({})
      addToast("Your delivery address has been updated successfully.", { appearance: "success", autoDismiss: true });
      // }
      setLoader(false)
    } catch (error) {
      addToast("Your delivery address has been updated fail.", { appearance: "error", autoDismiss: true });
      setLoader(false)
    }
  }

  const onChangeAccount = async (data) => {
    setLoader(true)
    try {
      let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER;
      let param = {
        emailAddress: data.email
      }
      // console.log(param);
      await WebService.patch(action, param);
      // if (response) {
      // reset({})
      addToast("Your account has been updated successfully.", { appearance: "success", autoDismiss: true });
      // }
      setLoader(false)
    } catch (error) {
      addToast("Your account has been updated fail.", { appearance: "error", autoDismiss: true });
      setLoader(false)
    }
  }
  const onDeleteConfirm = () => {
    console.log('confrim')
    setIsDeleted(!isDeleted)
  }
  const onDelete = async () => {
    console.log('delete')
    console.log('delete')
    onDeleteConfirm()
    setLoader(true)
    try {
      let action = constant.ACTION.AUTH + constant.ACTION.CUSTOMER;


      await WebService.delete(action);

      addToast("Your account has been deleted successfully.", { appearance: "success", autoDismiss: true });
      history.push('/login')
      setUser('')
      setLocalData('token', '')
      deleteAllFromCart()
      setLoader(false)
    } catch (error) {
      addToast("Your account has been deleted fail.", { appearance: "error", autoDismiss: true });
      setLoader(false)
    }
  }
  return (
    <Fragment>
      <MetaTags>
        <title>{merchant.name} | {strings["My Account"]}</title>
        {/* <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings["Home"]}</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {strings["My Account"]}
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
                  <Accordion defaultActiveKey="3">
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="3">
                          <h3 className="panel-title">
                            <span>1 .</span> {strings["Your account"]}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="3">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>{strings["Your account"]}</h4>
                            </div>
                            <form onSubmit={accountSubmit(onChangeAccount)}>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>{strings["User Name"]}</label>
                                    <input type="text" name={accountForm.username.name} disabled ref={accountRef(accountForm.username.validate)} />
                                    {accountErr[accountForm.username.name] && <p className="error-msg">{errors[accountForm.username.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>{strings["Email address"]}</label>
                                    <input type="text" name={accountForm.email.name} ref={accountRef(accountForm.email.validate)} />
                                    {accountErr[accountForm.email.name] && <p className="error-msg">{accountErr[accountForm.email.name].message}</p>}

                                  </div>
                                </div>

                              </div>

                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">{strings["Continue"]}</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>

                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        <Accordion.Toggle variant="link" eventKey="0">
                          <h3 className="panel-title">
                            <span>2 .</span> {strings["Billing Address"]}{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="0">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>{strings["Billing Information"]}</h4>
                              {/* <h5>Your Personal Details</h5> */}
                            </div>
                            <form onSubmit={billingSubmit(onUpdateBilling)}>
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>{strings["First Name"]}</label>
                                    <input type="text" name={billingForm.firstName.name} ref={billingRef(billingForm.firstName.validate)} />
                                    {billingErr[billingForm.firstName.name] && <p className="error-msg">{billingErr[billingForm.firstName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>{strings["Last Name"]}</label>
                                    <input type="text" name={billingForm.lastName.name} ref={billingRef(billingForm.lastName.validate)} />
                                    {billingErr[billingForm.lastName.name] && <p className="error-msg">{billingErr[billingForm.lastName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <label>{strings["Company Name"]}</label>
                                    <input type="text" name={billingForm.company.name} ref={billingRef(billingForm.company.validate)} />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <Script
                                      url={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_MAP_API_KEY + "&libraries=places"}
                                      onLoad={handleScriptLoad}
                                    />
                                    <label>{strings["Street Address"]}</label>
                                    <input
                                      className="billing-info"
                                      placeholder={strings["House number and street name"]}
                                      type="text"
                                      id="autocomplete"
                                      name={billingForm.address.name}
                                      ref={billingRef(billingForm.address.validate)}
                                    />
                                    {billingErr[billingForm.address.name] && <p className="error-msg">{billingErr[billingForm.address.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>{strings["Country"]}</label>
                                    <Controller
                                      name={billingForm.country.name}
                                      control={control}
                                      rules={billingForm.country.validate}
                                      render={props => {
                                        return (
                                          <select onChange={(e) => { props.onChange(e.target.value); getState(e.target.value); }} value={props.value}>
                                            <option>{strings["Select a country"]}</option>
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
                                    <label>{strings["State"]}</label>
                                    {
                                      stateData && stateData.length > 0 ?
                                        <Controller
                                          name={billingForm.stateProvince.name}
                                          control={control}
                                          rules={billingForm.stateProvince.validate}
                                          render={props => {
                                            return (
                                              <select onChange={(e) => props.onChange(e.target.value)} value={props.value}>
                                                <option>{strings["Select a state"]}</option>
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
                                    <label>{strings["Town/City"]}</label>
                                    <input type="text" name={billingForm.city.name} ref={billingRef(billingForm.city.validate)} />
                                    {billingErr[billingForm.city.name] && <p className="error-msg">{billingErr[billingForm.city.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>{strings["Postcode"]}</label>
                                    <input type="text" name={billingForm.postalCode.name} ref={billingRef(billingForm.postalCode.validate)} />
                                    {billingErr[billingForm.postalCode.name] && <p className="error-msg">{billingErr[billingForm.postalCode.name].message}</p>}
                                  </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Email Address</label>
                                    <input type="email" name={billingForm.email.name} ref={billingRef(billingForm.email.validate)} />
                                    {billingErr[billingForm.email.name] && <p className="error-msg">{billingErr[billingForm.email.name].message}</p>}
                                  </div>
                                </div> */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>{strings["Phone"]}</label>
                                    <input type="number" name={billingForm.phone.name} ref={billingRef(billingForm.phone.validate)} />
                                    {billingErr[billingForm.phone.name] && <p className="error-msg">{billingErr[billingForm.phone.name].message}</p>}
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">{strings["Continue"]}</button>
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
                            <span>3 .</span> {strings["Delivery Address"]}{" "}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="1">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>{strings["Delivery Information"]}</h4>
                              {/* <h5>Your Personal Details</h5> */}
                            </div>
                            <form onSubmit={deliverySubmit(onUpdateDelivery)}>
                              <div className="row">
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>{strings["First Name"]}</label>
                                    <input type="text" name={billingForm.shipFirstName.name} ref={deliveryRef(billingForm.shipFirstName.validate)} />
                                    {deliveryErr[billingForm.shipFirstName.name] && <p className="error-msg">{deliveryErr[billingForm.shipFirstName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>{strings["Last Name"]}</label>
                                    <input type="text" name={billingForm.shipLastName.name} ref={deliveryRef(billingForm.shipLastName.validate)} />
                                    {deliveryErr[billingForm.shipLastName.name] && <p className="error-msg">{deliveryErr[billingForm.shipLastName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <label>{strings["Company Name"]}</label>
                                    <input type="text" name={billingForm.shipCompany.name} ref={deliveryRef(billingForm.shipCompany.validate)} />
                                  </div>
                                </div>
                                <div className="col-lg-12">
                                  <div className="billing-info mb-20">
                                    <Script
                                      url={"https://maps.googleapis.com/maps/api/js?key=" + process.env.REACT_APP_MAP_API_KEY + "&libraries=places"}
                                      onLoad={handleDeliveryScriptLoad}
                                    />
                                    <label>{strings["Street Address"]}</label>
                                    <input
                                      className="billing-info"
                                      placeholder="House number and street name"
                                      type="text"
                                      id="autocomplete1"
                                      name={billingForm.shipAddress.name}
                                      ref={deliveryRef(billingForm.shipAddress.validate)}
                                    />
                                    {deliveryErr[billingForm.shipAddress.name] && <p className="error-msg">{deliveryErr[billingForm.shipAddress.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>{strings["Country"]}</label>
                                    <Controller
                                      name={billingForm.shipCountry.name}
                                      control={deliveryControl}
                                      rules={billingForm.shipCountry.validate}
                                      render={props => {
                                        return (
                                          <select onChange={(e) => { props.onChange(e.target.value); getShippingState(e.target.value); }} value={props.value}>
                                            <option>{strings["Select a country"]}</option>
                                            {

                                              countryData.map((data, i) => {
                                                return <option key={i} value={data.code}>{data.name}</option>
                                              })
                                            }
                                          </select>
                                        )
                                      }}
                                    />
                                    {deliveryErr[billingForm.shipCountry.name] && <p className="error-msg">{deliveryErr[billingForm.shipCountry.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>{strings["State"]}</label>
                                    {
                                      shipStateData && shipStateData.length > 0 ?
                                        <Controller
                                          name={billingForm.shipStateProvince.name}
                                          control={deliveryControl}
                                          rules={billingForm.shipStateProvince.validate}
                                          render={props => {
                                            return (
                                              <select onChange={(e) => props.onChange(e.target.value)} value={props.value}>
                                                <option>{strings["Select a state"]}</option>
                                                {
                                                  shipStateData.map((data, i) => {
                                                    return <option key={i} value={data.code}>{data.name}</option>
                                                  })
                                                }
                                              </select>)
                                          }}
                                        />
                                        :
                                        <input type="text" name={billingForm.shipStateProvince.name} ref={deliveryRef(billingForm.shipStateProvince.validate)} />
                                    }
                                    {deliveryErr[billingForm.shipStateProvince.name] && <p className="error-msg">{deliveryErr[billingForm.shipStateProvince.name].message}</p>}

                                    {/* <input type="text" /> */}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>{strings["Town/City"]}</label>
                                    <input type="text" name={billingForm.shipCity.name} ref={deliveryRef(billingForm.shipCity.validate)} />
                                    {deliveryErr[billingForm.shipCity.name] && <p className="error-msg">{deliveryErr[billingForm.shipCity.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info mb-20">
                                    <label>{strings["Postcode"]}</label>
                                    <input type="text" name={billingForm.shipPostalCode.name} ref={deliveryRef(billingForm.shipPostalCode.validate)} />
                                    {deliveryErr[billingForm.shipPostalCode.name] && <p className="error-msg">{deliveryErr[billingForm.shipPostalCode.name].message}</p>}
                                  </div>
                                </div>
                                {/* <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>Email Address</label>
                                    <input type="email" name={billingForm.shipEmail.name} ref={billingRef(billingForm.shipEmail.validate)} />
                                    {billingErr[billingForm.shipEmail.name] && <p className="error-msg">{billingErr[billingForm.shipEmail.name].message}</p>}
                                  </div>
                                </div> */}
                                <div className="col-lg-6 col-md-6">
                                  <div className="billing-info">
                                    <label>{strings["Phone"]}</label>
                                    <input type="number" name={billingForm.shipPhone.name} ref={deliveryRef(billingForm.shipPhone.validate)} />
                                    {deliveryErr[billingForm.shipPhone.name] && <p className="error-msg">{deliveryErr[billingForm.shipPhone.name].message}</p>}
                                  </div>
                                </div>
                              </div>
                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">{strings["Continue"]}</button>
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
                            <span>4 .</span> {strings["Change your password"]}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="2">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            <div className="account-info-wrapper">
                              <h4>{strings["Change Password"]}</h4>
                            </div>
                            <form onSubmit={handleSubmit(onChangePassword)}>
                              <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>{strings["User Name"]}</label>
                                    <input type="text" name={changePasswordForm.userName.name} ref={register(changePasswordForm.userName.validate)} />
                                    {errors[changePasswordForm.userName.name] && <p className="error-msg">{errors[changePasswordForm.userName.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>{strings["Current Password"]}</label>
                                    <input type="password" name={changePasswordForm.currentPassword.name} ref={register(changePasswordForm.currentPassword.validate)} />
                                    {errors[changePasswordForm.currentPassword.name] && <p className="error-msg">{errors[changePasswordForm.currentPassword.name].message}</p>}

                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>{strings["Password"]}</label>
                                    <input type="password" onChange={(e) => onPasswordChange(e)} name={changePasswordForm.password.name} ref={register(changePasswordForm.password.validate)} />
                                    {errors[changePasswordForm.password.name] && <p className="error-msg">{errors[changePasswordForm.password.name].message}</p>}
                                  </div>
                                </div>
                                <div className="col-lg-12 col-md-12">
                                  <div className="billing-info">
                                    <label>{strings["Repeat Password"]}Repeat Password</label>
                                    <input type="password" onChange={(e) => onConfirmPassword(e)} name={changePasswordForm.repeatPassword.name} ref={register(changePasswordForm.repeatPassword.validate)} />
                                    {errors[changePasswordForm.repeatPassword.name] && <p className="error-msg">{errors[changePasswordForm.repeatPassword.name].message}</p>}
                                  </div>
                                </div>
                              </div>

                              <div className="billing-back-btn">
                                <div className="billing-btn">
                                  <button type="submit">{strings["Continue"]}</button>
                                </div>
                              </div>
                            </form>
                          </div>
                        </Card.Body>
                      </Accordion.Collapse>
                    </Card>
                    <Card className="single-my-account mb-20">
                      <Card.Header className="panel-heading">
                        {/* */}
                        <Accordion.Toggle variant="link" eventKey="4">
                          <h3 className="panel-title">
                            <span>5 .</span> {strings["Account Management"]}
                          </h3>
                        </Accordion.Toggle>
                      </Card.Header>
                      <Accordion.Collapse eventKey="4">
                        <Card.Body>
                          <div className="myaccount-info-wrapper">
                            {/* <div className="account-info-wrapper">
                              <h4>{strings["Your account"]}</h4>
                            </div> */}
                            <form>
                              {/* <div className="row">
                                <div className="col-lg-12 col-md-12">
                                  <button type="button" onClick={onDeleteConfirm} className="delete_account">
                                    <span className="label">{strings["Delete your account"]}</span>
                                  </button>
                                </div>

                              </div> */}
                              <div className="account-management">
                                <div className="delete-btn">
                                  <button type="button" onClick={onDeleteConfirm} >{strings["Delete your account"]}</button>
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
        {
          isDeleted &&
          <SweetAlert
            showCancel
            cancelBtnBsStyle="light"
            confirmBtnText="Yes, delete it!"
            confirmBtnBsStyle="danger"
            onConfirm={onDelete}
            onCancel={onDeleteConfirm}
            title="Are you sure?"
          >
            Are you sure that you want to permanently delete this account
        </SweetAlert>
        }
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
    userData: state.userData.userData,
    // cartItems: state.cartData.cartItems,
    // currentLocation: state.userData.currentAddress,
    stateData: state.userData.state,
    shipStateData: state.userData.shipState,
    merchant: state.merchantData.merchant
    // defaultStore: state.merchantData.defaultStore,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    },
    setUser: (data) => {
      dispatch(setUser(data));
    },
    deleteAllFromCart: () => {
      dispatch(deleteAllFromCart())
    },
    getState: (code) => {
      dispatch(getState(code));
    },
    getShippingState: (code) => {
      dispatch(getShippingState(code));
    },
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(MyAccount));

  // export default MyAccount;
