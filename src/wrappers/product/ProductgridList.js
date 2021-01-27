import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../redux/actions/cartActions";
import ProductGridListSingle from "../../components/product/ProductGridListSingle";
import { isValidObject } from "../../util/helper";
const ProductGrid = ({
  products,
  addToCart,
  cartItems,
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
            addToCart={addToCart}
            cartItem={cartItems}
            userData={userData}
            key={product.id}
          />
        );
      })}
    </Fragment>
  );
};

ProductGrid.propTypes = {
  addToCart: PropTypes.func,
  cartItems: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string
};

const mapStateToProps = state => {
  return {
    cartItems: state.cartData.cartItems,
    userData: state.userData.userData
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
