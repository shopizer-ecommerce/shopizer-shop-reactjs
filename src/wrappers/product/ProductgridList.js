import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
// import { addToWishlist } from "../../redux/actions/wishlistActions";
// import { addToCompare } from "../../redux/actions/compareActions";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import { isValidObject } from "../../util/helper";
const ProductGrid = ({
  products,
  // currency,
  addToCart,
  // addToWishlist,
  // addToCompare,
  cartItems,
  // wishlistItems,
  // compareItems,
  sliderClassName,
  spaceBottomClass,
  userData,
  strings
}) => {
  return (
    <Fragment>
      {products.map(product => {
        return (
          <ProductGridListSingle
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            product={product}
            strings={strings}
            // currency={currency}
            addToCart={addToCart}
            // addToWishlist={addToWishlist}
            // addToCompare={addToCompare}
            cartItem={cartItems}
            userData={userData}
            // wishlistItem={
            //   wishlistItems.filter(
            //     wishlistItem => wishlistItem.id === product.id
            //   )[0]
            // }
            // compareItem={
            //   compareItems.filter(
            //     compareItem => compareItem.id === product.id
            //   )[0]
            // }
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  // addToCompare: PropTypes.func,
  // addToWishlist: PropTypes.func,
  cartItems: PropTypes.object,
  // compareItems: PropTypes.array,
  // currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  // wishlistItems: PropTypes.array
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData.cartItems,
    userData: state.userData.userData
    // currency: state.currencyData,
    // cartItems: state.cartData,
    // wishlistItems: state.wishlistData,
    // compareItems: state.compareData
  };
};

const mapDispatchToProps = dispatch => {
  return {

    addToCart: (
      item,
      addToast,
      cartData,
      quantityCount,
      defaultStore,
      userData,
      selectedProductColor
    ) => {
      let index = isValidObject(cartData) ? cartData.products.findIndex(order => order.id === item.id) : -1;
      dispatch(
        addToCart(
          item,
          addToast,
          cartData.code,
          index === -1 ? quantityCount : cartData.products[index].quantity + quantityCount,
          defaultStore,
          userData,
          selectedProductColor
        )
      );
    },
    // addToWishlist: (item, addToast) => {
    //   dispatch(addToWishlist(item, addToast));
    // },
    // addToCompare: (item, addToast) => {
    //   dispatch(addToCompare(item, addToast));
    // }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductGrid);
