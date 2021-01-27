import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import LayoutOne from "../../layouts/LayoutOne";
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
const Contact = ({ strings, location, merchant, setLoader }) => {
  const { pathname } = location;
  const { addToast } = useToasts();
  const { register, handleSubmit, errors, reset } = useForm({
    mode: "onChange"
  });

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
        <title>Shopizer | Contact</title>
        {/* <meta
          name="description"
          content="Contact of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Contact
      </BreadcrumbsItem>
      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="contact-area pt-100 pb-100">
          <div className="container">
            <div className="contact-map mb-10">
              <LocationMap merchant={merchant} />
            </div>
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
                        <a href="mailto:urname@email.com">{merchant.email}</a>
                      </p>
                      <p>
                        <a href="https://www.shopizer.com/">www.shopizer.com</a>
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
                    <h3>Follow Us</h3>
                    <ul>
                      <li>
                        <a href="//facebook.com">
                          <i className="fa fa-facebook" />
                        </a>
                      </li>
                      <li>
                        <a href="//pinterest.com">
                          <i className="fa fa-pinterest-p" />
                        </a>
                      </li>
                      <li>
                        <a href="//thumblr.com">
                          <i className="fa fa-tumblr" />
                        </a>
                      </li>
                      <li>
                        <a href="//vimeo.com">
                          <i className="fa fa-vimeo" />
                        </a>
                      </li>
                      <li>
                        <a href="//twitter.com">
                          <i className="fa fa-twitter" />
                        </a>
                      </li>
                    </ul>
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
      </LayoutOne>
    </Fragment>
  );
};

Contact.propTypes = {
  location: PropTypes.object
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
