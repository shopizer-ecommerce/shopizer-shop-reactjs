import PropTypes from "prop-types";
import React, { Fragment, useState, useEffect } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import LocationMap from "../../components/contact/LocationMap";
import { useForm } from "react-hook-form";
import { connect } from "react-redux";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";
import { useToasts } from "react-toast-notifications";
import { multilanguage } from "redux-multilanguage";

const contactForm = {
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
  username: {
    name: "username",
    validate: {
      required: {
        value: true,
        message: "Name is required"
      }
    }
  },
  subject: {
    name: "subject",
    validate: {
      required: {
        value: true,
        message: "Subject is required"
      }
    }
  },
  comment: {
    name: "comment",
    validate: {
      required: {
        value: true,
        message: "Message is required"
      }
    }
  }
};
const Contact = ({ strings, currentLanguageCode, location, merchant, setLoader }) => {
  const [message, setMessage] = useState('')
  const { pathname } = location;
  const { addToast } = useToasts();
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onChange"
  });
  useEffect(() => {
    getContentMessage();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getContentMessage = async () => {
    let action = constant.ACTION.CONTENT + constant.ACTION.BOXES + constant.ACTION.AVAILABILITY + '?lang=' + currentLanguageCode;
    try {
      let response = await WebService.get(action);
      if (response) {
        //console.log('Response -> ' + JSON.stringify(response));
        setMessage(response.description.description);
      }
    } catch (error) {
      console.log("Content error " + error );
    }
  }

  const onSubmitContactForm = async (data) => {
    // console.log(data)
    setLoader(true)
    try {
      let action = constant.ACTION.CONTACT;
      let param = {
        "comment": data.comment,
        "email": data.email,
        "name": data.name,
        "subject": data.subject,
      }
      await WebService.post(action, param);
      // console.log(response)
      // if (response) {
      reset({})
      addToast("Thank you for getting in touch!", { appearance: "success", autoDismiss: true });
      // }
      setLoader(false)
    } catch (error) {
      setLoader(false)
    }
  }
  return (
    <Fragment>
      <MetaTags>
        <title>{merchant.name} | {strings["Contact"]}</title>
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings["Home"]}</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        {strings["Contact"]}
      </BreadcrumbsItem>
      <Layout headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            {
            <div className="contact-map mb-10">
              <LocationMap merchant={merchant} />
            </div>
            }
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone" />
                    </div>
                    <div className="contact-info-dec">
                      <p>{merchant.phone}</p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe" />
                    </div>
                    <div className="contact-info-dec">
                      <p>
                        <a href={'mailto:' + merchant.email}>{merchant.email}</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker" />
                    </div>
                    <div className="contact-info-dec">
                      <p>{merchant.address.address} </p>
                      <p>{merchant.address.city}, {merchant.address.stateProvince}, {merchant.address.country}</p>
                      <p>{merchant.address.postalCode}</p>
                    </div>
                  </div>
                  <div className="contact-social text-center">
                    <h3>Suivez-nous</h3>
                    <ul>
                      <li>
                        <a href="https://www.facebook.com/perfectogazpropane/">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div className="contact-info-dec">
                  <p dangerouslySetInnerHTML={{ __html: message.replace("]]>", "") }}></p>
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                  <div className="contact-title mb-30">
                    <h2>{strings["Get In Touch"]}</h2>
                  </div>
                  <form className="contact-form-style" onSubmit={handleSubmit(onSubmitContactForm)}>
                    <div className="row">
                      <div className="col-lg-6">
                        <input type="text" name={contactForm.username.name} ref={register(contactForm.username.validate)} placeholder={strings["Name"]} />
                        {errors[contactForm.username.name] && <p className="error-msg">{errors[contactForm.username.name].message}</p>}
                      </div>
                      <div className="col-lg-6">
                        <input name={contactForm.email.name} ref={register(contactForm.email.validate)} placeholder={strings["Email address"]} type="email" />
                        {errors[contactForm.email.name] && <p className="error-msg">{errors[contactForm.email.name].message}</p>}
                      </div>
                      <div className="col-lg-12">
                        <input
                          placeholder={strings["Subject"]}
                          type="text"
                          name={contactForm.subject.name}
                          ref={register(contactForm.subject.validate)}
                        />
                        {errors[contactForm.subject.name] && <p className="error-msg">{errors[contactForm.subject.name].message}</p>}
                      </div>
                      <div className="col-lg-12">
                        <textarea
                          placeholder={strings["Your Message"]}
                          name={contactForm.comment.name}
                          ref={register(contactForm.comment.validate)}
                        />
                        {errors[contactForm.comment.name] && <p className="error-msg">{errors[contactForm.comment.name].message}</p>}
                        <button type="submit" className="submit" >
                          {strings["Send"]}
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

//hostName = () => {
//  return window.location.protocol + "//" + window.location.host;
//}

Contact.propTypes = {
  location: PropTypes.object,
  currentLanguageCode: PropTypes.string,
};

const mapStateToProps = state => {
  return {
    merchant: state.merchantData.merchant
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(Contact));
// export default Contact;
