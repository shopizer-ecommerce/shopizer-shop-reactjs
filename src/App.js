import PropTypes from "prop-types";
import React, { useEffect, Suspense, lazy } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";
import { multilanguage, loadLanguages } from "redux-multilanguage";
import { connect } from "react-redux";
import { BreadcrumbsProvider } from "react-breadcrumbs-dynamic";

import Loader from "./components/loader/loader"
import Cookie from "./components/consent/Cookie"
import Cookies from 'universal-cookie';


import {
  setShopizerCartID
} from "./redux/actions/cartActions";

// var sha512 = require('js-sha512').sha512;
// home pages
const Home = lazy(() => import("./pages/home/Home"));

// shop pages
const Category = lazy(() => import("./pages/category/Category"));

// product pages
const ProductDetail = lazy(() => import("./pages/product-details/ProductDetail"));

// other pages
// const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const ForgotPassword = lazy(() => import("./pages/other/ForgotPassword"));
const ResetPassword = lazy(() => import("./pages/other/ResetPassword"));

const Cart = lazy(() => import("./pages/other/Cart"));
const RecentOrder = lazy(() => import("./pages/other/RecentOrder"));
const OrderDetails = lazy(() => import("./pages/other/OrderDetails"));
const Checkout = lazy(() => import("./pages/other/Checkout"));

const NotFound = lazy(() => import("./pages/other/NotFound"));
const OrderConfirm = lazy(() => import("./pages/other/OrderConfirm"));
const Content = lazy(() => import("./pages/content/Content"));
const SearchProduct = lazy(() => import("./pages/search-product/SearchProduct"));


//export default function App = (props) => {
const App = (props) => {


  useEffect(() => {
    var cart_cookie = window._env_.APP_MERCHANT + '_shopizer_cart';
    const cookies = new Cookies();
    let cookie = cookies.get(cart_cookie);
    if(cookie) {
        console.log('cookie !!! ' + cookie);
        props.dispatch(setShopizerCartID(cookie));
    }
    //if(cookies[cart_cookie]) {
    //  console.log('cookie !!! ' + cookies[cart_cookie]);
    //  props.dispatch(setShopizerCartID(cookies[cart_cookie]));
    //}
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

          <Loader></Loader>
          <Cookie></Cookie>
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
                  component={Home}
                />

                {/* Homepages */}


                {/* Shop pages */}
                <Route
                  path="/category/:id"
                  component={Category}
                />

                {/* Shop product pages */}
                <Route
                  path="/product/:id"
                  component={ProductDetail}
                />
                <Route
                  path="/content/:id"
                  component={Content}
                />
                <Route
                  path="/search/:id"
                  component={SearchProduct}
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
                  path="/forgot-password"
                  component={ForgotPassword}
                />
                <Route
                  path="/customer/:code/reset/:id"
                  component={ResetPassword}
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
