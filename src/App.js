import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

import CookieConsent from "react-cookie-consent";
import Loader from "./components/loader/loader"
// home pages
const HomeFashionSeven = lazy(() => import("./pages/home/HomeFashionSeven"));

// shop pages
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));

// product pages
const Product = lazy(() => import("./pages/shop-product/Product"));

// other pages
// const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));

const Cart = lazy(() => import("./pages/other/Cart"));
const RecentOrder = lazy(() => import("./pages/other/recentOrder"));
const OrderDetails = lazy(() => import("./pages/other/orderDetails"));
// const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const OrderConfirm = lazy(() => import("./pages/other/OrderConfirm"));
const Content = lazy(() => import("./pages/content/content"));
const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: { //from merchant supported languages
          en: require("./translations/english.json"),
          fr: require("./translations/french.json")
        }
      })
    );
  });

  return (
    <ToastProvider placement="bottom-left">
      <BreadcrumbsProvider>
        <Router>
          <CookieConsent location="bottom" buttonText="ACCEPT" style={{ background: "#fb799c" }}
            buttonStyle={{ background: "#404040", color: "#fff", fontSize: "14px", padding: '10px 30px' }}>This website uses cookies to enhance the user experience.</CookieConsent>
          <Loader></Loader>
          <ScrollToTop>
            <Suspense
              fallback={
                <div className="flone-preloader-wrapper">
                  <div className="flone-preloader">
                    <span></span>
                    <span></span>
                  </div>
                </div>
              }
            >
              <Switch>
                <Route
                  exact
                  path="/"
                  component={HomeFashionSeven}
                />

                {/* Homepages */}
                <Route
                  path="/home-fashion-seven"
                  component={HomeFashionSeven}
                />

                {/* Shop pages */}
                <Route
                  path="/category/:id"
                  component={ShopGridStandard}
                />

                {/* Shop product pages */}
                <Route
                  path="/product/:id"
                  component={Product}
                />
                <Route
                  path="/content/:id"
                  component={Content}
                />

                {/* Other pages */}

                <Route
                  path="/contact"
                  component={Contact}
                />
                <Route
                  path="/my-account"
                  component={MyAccount}
                />
                <Route
                  path="/register"
                  component={LoginRegister}
                />
                <Route
                  path="/login"
                  component={LoginRegister}
                />

                <Route
                  path="/cart"
                  component={Cart}
                />
                <Route
                  path="/recent-order"
                  component={RecentOrder}
                />
                <Route
                  path="/order-details/:id"
                  component={OrderDetails}
                />
                <Route
                  path="/checkout"
                  component={Checkout}
                />

                <Route
                  path="/order-confirm"
                  component={OrderConfirm}
                />

                <Route
                  path={"/not-found"}
                  component={NotFound}
                />

                <Route exact component={NotFound} />
              </Switch>
            </Suspense>
          </ScrollToTop>
        </Router>
      </BreadcrumbsProvider>
    </ToastProvider>
  );
};

App.propTypes = {
  dispatch: PropTypes.func
};

export default connect()(multilanguage(App));
