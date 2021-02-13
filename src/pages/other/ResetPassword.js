import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import MetaTags from "react-meta-tags";
import { Link, useHistory } from "react-router-dom";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import WebService from '../../util/webService';
import constant from '../../util/constant';
import { setLoader } from "../../redux/actions/loaderActions";
import { connect } from "react-redux";
import { multilanguage } from "redux-multilanguage";
const resetForm = {
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
    },
};

const ResetPassword = ({ merchant, strings, props, location, setLoader, defaultStore, storeCode, resetID }) => {
    // const { pathname } = location;
    const { addToast } = useToasts();
    const history = useHistory();
    const [isValid, setIsValid] = useState(true);
    const { register, handleSubmit, errors, watch, setError, clearErrors, reset } = useForm({
        mode: "onChange",
        defaultValues: { password: "", repeatPassword: "" },
        criteriaMode: "all"
    });
    useEffect(() => {
        checkValidURL()

        // eslint-disable-next-line react-hooks/exhaustive-deps 
    }, []);

    const checkValidURL = async () => {
        setLoader(true)
        try {
            let action = constant.ACTION.CUSTOMER + storeCode + '/' + constant.ACTION.RESET + resetID;
            await WebService.get(action);
            // if (response) {
            //     // addToast("You have successfully logged in to this website", { appearance: "success", autoDismiss: true });
            // }
            setIsValid(true)
            setLoader(false)
        } catch (error) {
            setIsValid(false)
            // addToast("Customer is not found", { appearance: "error", autoDismiss: true });
            setLoader(false)
        }
    }
    const onConfirmPassword = (e) => {
        if (watch('password') !== e.target.value) {
            return setError(
                resetForm.repeatPassword.name,
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
                resetForm.repeatPassword.name,
                {
                    type: "notMatch",
                    message: "Repeat Password should be the same as a password"
                }
            );

        } else {
            clearErrors(resetForm.repeatPassword.name);
        }

    }
    const onSubmit = async (data) => {
        setLoader(true)
        try {
            let action = constant.ACTION.CUSTOMER + storeCode + '/' + constant.ACTION.PASSWORD + resetID;
            let param = { "password": data.password, "repeatPassword": data.repeatPassword }
            await WebService.post(action, param);
            // if (response) {
            reset({})
            history.push('/login')
            addToast("You have successfully reset your password. you can now login as usual with your email address and your new password.", { appearance: "success", autoDismiss: true });
            // }
            setLoader(false)
        } catch (error) {
            console.log(error)
            addToast("Password don't match", { appearance: "error", autoDismiss: true });
            setLoader(false)
        }
    }
    return (
        <Fragment>
            <MetaTags>
                <title>{merchant.name} | {strings["Reset Password"]}</title>
                {/* <meta
          name="description"
          content="Compare page of flone react minimalist eCommerce template."
        /> */}
            </MetaTags>
            <BreadcrumbsItem to={process.env.PUBLIC_URL + "/"}>{strings["Home"]}</BreadcrumbsItem>
            <BreadcrumbsItem to={"/login"}>
                {strings["Reset Password"]}
            </BreadcrumbsItem>
            <Layout headerContainerClass="container-fluid"
                headerPaddingClass="header-padding-2"
                headerTop="visible">
                {/* breadcrumb */}
                <Breadcrumb />
                {
                    isValid &&
                    <div className="login-register-area pt-100 pb-100">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                                    <div className="login-register-wrapper">
                                        <Tab.Container defaultActiveKey={'forgot-password'}>
                                            <Nav variant="pills" className="login-register-tab-list">
                                                <Nav.Item>
                                                    <Nav.Link eventKey="forgot-password">
                                                        <h4>{strings["Reset Password"]}</h4>
                                                    </Nav.Link>
                                                </Nav.Item>
                                            </Nav>
                                            <Tab.Content>
                                                <Tab.Pane eventKey="forgot-password">
                                                    <div className="login-form-container">
                                                        <div className="login-register-form">
                                                            <form onSubmit={handleSubmit(onSubmit)} >
                                                                <p>{strings["Reset Password Note"]}</p>
                                                                <div className="login-input">
                                                                    <input type="password" name={resetForm.password.name} ref={register(resetForm.password.validate)} placeholder={strings["Password"]} onChange={(e) => onPasswordChange(e)} />
                                                                    {errors[resetForm.password.name] && <p className="error-msg">{errors[resetForm.password.name].message}</p>}

                                                                </div>
                                                                <div className="login-input">
                                                                    <input type="password" name={resetForm.repeatPassword.name} ref={register(resetForm.repeatPassword.validate)} placeholder={strings["Repeat Password"]} onChange={(e) => onConfirmPassword(e)} />
                                                                    {errors[resetForm.repeatPassword.name] && <p className="error-msg">{errors[resetForm.repeatPassword.name].message}</p>}

                                                                </div>
                                                                <div className="button-box">
                                                                    <div className="login-toggle-btn">
                                                                        {/* <input type="checkbox" /> */}
                                                                        <label className="ml-30"></label>
                                                                        {/* <Link to={"/login"}>
                                                                        Go to login
                                                                    </Link> */}
                                                                    </div>
                                                                    <button type="submit">
                                                                        <span>{strings["Update Password"]}</span>
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
                }
                {
                    !isValid &&
                    <div className="error-area pt-40 pb-100">
                        <div className="container">
                            <div className="row justify-content-center">
                                <div className="col-xl-7 col-lg-8 text-center">
                                    <div className="error">
                                        <h1>400</h1>
                                        <h2>{strings["Link Invalid"]}</h2>
                                        <p>
                                            {strings["To Your Reset Password"]}
                                        </p>

                                        <Link to={"/login"} className="error-btn">
                                            {strings["Back to login page"]}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                }

            </Layout>
        </Fragment >
    );
};

ResetPassword.propTypes = {
    location: PropTypes.object
};

const mapStateToProps = (state, ownProps) => {
    // console.log(ownProps);
    return {
        defaultStore: state.merchantData.defaultStore,
        storeCode: ownProps.match.params.code,
        resetID: ownProps.match.params.id,
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


export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(ResetPassword));
            // export default LoginRegister;
