import PropTypes from "prop-types";
import React, { Fragment } from "react";
import MetaTags from "react-meta-tags";
import { Link, useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLocalData } from '../../util/helper';
import { setLoader } from "../../redux/actions/loaderActions";
import { setUser } from "../../redux/actions/userAction";
import { connect } from "react-redux";

const loginForm = {
  username: {
    name: "username",
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
  password: {
    name: "password",
    validate: {
      required: {
        value: true,
        message: "Password is required"
      }
    }
  }
};
const LoginRegister = ({ props, location, setLoader, setUser }) => {
  const { pathname } = location;
  const { addToast } = useToasts();
  const history = useHistory();

  const { register, handleSubmit, errors } = useForm({
    mode: "onChange",
    defaultValues: { username: "", password: "" },
    criteriaMode: "all"
  });
  const onSubmit = async (data) => {
    setLoader(true)
    try {
      let action = constant.ACTION.CUSTOMER + constant.ACTION.LOGIN;
      let param = { "username": data.username, "password": data.password }
      let response = await WebService.post(action, param);
      console.log(response)
      if (response) {
        addToast("You have successfully logged in to this website", { appearance: "success", autoDismiss: true });
        setUser(response)
        setLocalData('token', response.token)
        history.push('my-account')

      }
      setLoader(false)
    } catch (error) {
      addToast("Incorrect username or password", { appearance: "error", autoDismiss: true });
      setLoader(false)
    }
  };
  return (
    <Fragment>
      <MetaTags>
        <title>Shopizer | Login</title>
        {/* <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        /> */}
      </MetaTags>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>Home</BreadcrumbsItem>
      <BreadcrumbsItem to={process.env.PUBLIC_URL + pathname}>
        Login Register
      </BreadcrumbsItem>
      <LayoutOne headerContainerClass="container-fluid"
        headerPaddingClass="header-padding-2"
        headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb />
        <div className="login-register-area pt-100 pb-100">
          <div className="container">
            <div className="row">
              <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                  <Tab.Container defaultActiveKey="login">
                    <Nav variant="pills" className="login-register-tab-list">
                      <Nav.Item>
                        <Nav.Link eventKey="login">
                          <h4>Login</h4>
                        </Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="register">
                          <h4>Register</h4>
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content>
                      <Tab.Pane eventKey="login">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form onSubmit={handleSubmit(onSubmit)} >
                              <div className="login-input">
                                <input
                                  type="text"
                                  name={loginForm.username.name}
                                  placeholder="Email address"
                                  ref={register(loginForm.username.validate)}
                                />

                                {errors[loginForm.username.name] && <p className="error-msg">{errors[loginForm.username.name].message}</p>}
                              </div>
                              <div className="login-input">
                                <input
                                  type="password"
                                  name={loginForm.password.name}
                                  placeholder="Password"
                                  ref={register(loginForm.password.validate)}
                                />
                                {errors[loginForm.password.name] && <p className="error-msg">{errors[loginForm.password.name].message}</p>}
                              </div>
                              <div className="button-box">
                                <div className="login-toggle-btn">
                                  <input type="checkbox" />
                                  <label className="ml-10">Remember me</label>
                                  <Link to={process.env.PUBLIC_URL + "/"}>
                                    Forgot Password?
                                  </Link>
                                </div>
                                <button type="submit">
                                  <span>Login</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="register">
                        <div className="login-form-container">
                          <div className="login-register-form">
                            <form>
                              <div className="login-input">
                                <input
                                  type="text"
                                  name="user-name"
                                  placeholder="Username"
                                />
                              </div>
                              <div className="login-input">
                                <input
                                  type="password"
                                  name="user-password"
                                  placeholder="Password"
                                />
                              </div>
                              <div className="login-input">
                                <input
                                  name="user-email"
                                  placeholder="Email"
                                  type="email"
                                />
                              </div>
                              <div className="button-box">
                                <button type="submit">
                                  <span>Register</span>
                                </button>
                              </div>
                            </form>
                          </div>
                        </div>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              </div>
            </div>
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

LoginRegister.propTypes = {
  location: PropTypes.object
};

const mapStateToProps = (state) => {
  return {
  };
};
const mapDispatchToProps = dispatch => {
  return {
    setLoader: (value) => {
      dispatch(setLoader(value));
    },
    setUser: (data) => {
      dispatch(setUser(data));
    }
  };
};


export default connect(mapStateToProps, mapDispatchToProps)(LoginRegister);
// export default LoginRegister;
