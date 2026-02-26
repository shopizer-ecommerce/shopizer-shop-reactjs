import PropTypes from "prop-types";
import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import MetaTags from "react-meta-tags";
import { BreadcrumbsItem } from "react-breadcrumbs-dynamic";
import { connect } from "react-redux";
import Layout from "../../layouts/Layout";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import { getLocalData } from "../../util/helper";
import { wishlistService } from "../../util/wishlistService";
import { addToCart } from "../../redux/actions/cartActions";
import { multilanguage } from "redux-multilanguage";

const Wishlist = ({ strings, addToCart, cartData, defaultStore, userData }) => {
  const [wishlistItems, setWishlistItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const { addToast } = useToasts();

  useEffect(() => {
    loadWishlist();
  }, []);

  const loadWishlist = async () => {
    try {
      const token = getLocalData('token');
      if (!token) {
        addToast("Please login to view wishlist", { appearance: "warning" });
        return;
      }
      const items = await wishlistService.getWishlist(token);
      setWishlistItems(items);
    } catch (error) {
      addToast("Failed to load wishlist", { appearance: "error" });
    } finally {
      setLoading(false);
    }
  };

  const handleRemove = async (productId) => {
    try {
      const token = getLocalData('token');
      await wishlistService.removeFromWishlist(productId, token);
      setWishlistItems(wishlistItems.filter(item => item.productId !== productId));
      addToast("Removed from wishlist", { appearance: "success" });
    } catch (error) {
      addToast("Failed to remove item", { appearance: "error" });
    }
  };

  const handleMoveToCart = async (item) => {
    const existing = cartData.products?.find(p => p.sku === item.productSku);
    const qty = (existing?.quantity || 0) + 1;
    const product = { sku: item.productSku, id: item.productId };
    addToCart(product, addToast, cartData.code, qty, defaultStore, userData);
    handleRemove(item.productId);
  };

  return (
    <Fragment>
      <MetaTags>
        <title>Wishlist | Shopizer</title>
      </MetaTags>
      <BreadcrumbsItem to="/">Home</BreadcrumbsItem>
      <BreadcrumbsItem to="/wishlist">Wishlist</BreadcrumbsItem>
      <Layout headerTop="visible">
        <Breadcrumb />
        <div className="cart-main-area pt-90 pb-100">
          <div className="container">
            {loading ? (
              <div className="row">
                <div className="col-12 text-center">
                  <p>Loading...</p>
                </div>
              </div>
            ) : wishlistItems.length === 0 ? (
              <div className="row">
                <div className="col-12 text-center">
                  <h3>Your wishlist is empty</h3>
                  <Link to="/shop" className="btn btn-primary mt-3">
                    Continue Shopping
                  </Link>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-12">
                  <div className="table-content table-responsive cart-table-content">
                    <table>
                      <thead>
                        <tr>
                          <th>Image</th>
                          <th>Product Name</th>
                          <th>Price</th>
                          <th>Status</th>
                          <th>Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {wishlistItems.map((item) => (
                          <tr key={item.id}>
                            <td className="product-thumbnail">
                              <Link to={`/product/${item.productId}`}>
                                <img
                                  className="img-fluid"
                                  src={item.imageUrl?.startsWith('http') ? item.imageUrl : `${window._env_.APP_BASE_URL}${item.imageUrl}` || "/assets/img/product/default.jpg"}
                                  alt={item.productName}
                                />
                              </Link>
                            </td>
                            <td className="product-name">
                              <Link to={`/product/${item.productId}`}>
                                {item.productName}
                              </Link>
                            </td>
                            <td className="product-price-cart">
                              <span className="amount">{item.price}</span>
                            </td>
                            <td className="product-wishlist-cart">
                              {item.available ? (
                                <button
                                  onClick={() => handleMoveToCart(item)}
                                  className="btn btn-primary btn-sm"
                                >
                                  Add to Cart
                                </button>
                              ) : (
                                <span className="text-danger">Out of Stock</span>
                              )}
                            </td>
                            <td className="product-remove">
                              <button
                                onClick={() => handleRemove(item.productId)}
                                className="btn btn-danger btn-sm"
                              >
                                <i className="fa fa-times"></i>
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    </Fragment>
  );
};

Wishlist.propTypes = {
  strings: PropTypes.object,
  addToCart: PropTypes.func,
  cartData: PropTypes.object,
  defaultStore: PropTypes.string,
  userData: PropTypes.oneOfType([PropTypes.object, PropTypes.string])
};

const mapStateToProps = state => ({
  cartData: state.cartData.cartItems,
  defaultStore: state.merchantData.defaultStore,
  userData: state.userData.userData
});

const mapDispatchToProps = dispatch => ({
  addToCart: (item, addToast, cartId, quantityCount, defaultStore, userData) => {
    dispatch(addToCart(item, addToast, cartId, quantityCount, defaultStore, userData));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(multilanguage(Wishlist));
