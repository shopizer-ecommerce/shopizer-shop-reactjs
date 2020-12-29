import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

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
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
// const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const OrderConfirm = lazy(() => import("./pages/other/OrderConfirm"));

const App = (props) => {
  useEffect(() => {
    props.dispatch(
      loadLanguages({
        languages: {
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
                // render={(routeProps) => (
                //   <Product {...routeProps} key={routeProps.match.params.id} />
                // )}
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
                  path="/login-register"
                  component={LoginRegister}
                />

                <Route
                  path="/cart"
                  component={Cart}
                />
                <Route
                  path="/wishlist"
                  component={Wishlist}
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
                  path={process.env.PUBLIC_URL + "/not-found"}
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
