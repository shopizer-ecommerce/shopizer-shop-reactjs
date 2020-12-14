import PropTypes from "prop-types";
import React, { Fragment } from "react";
import { connect } from "react-redux";
// import { getProducts } from "../../helpers/product";
import ProductGridSingleTwo from "../../components/product/ProductGridSingleTwo";
import { addToCart } from "../../redux/actions/cartActions";
// import { addToWishlist } from "../../redux/actions/wishlistActions";
// import { addToCompare } from "../../redux/actions/compareActions";
import { isValidObject } from "../../util/helper";
const ProductGridTwo = ({
  products,
  currency,
  addToCart,
  // addToWishlist,
  // addToCompare,
  cartData,
  // wishlistItems,
  // compareItems,
  sliderClassName,
  spaceBottomClass,
  colorClass,
  titlePriceClass
}) => {
  return (
    <Fragment>
      {products.map((product) => {
        return (
          <ProductGridSingleTwo
            sliderClassName={sliderClassName}
            spaceBottomClass={spaceBottomClass}
            colorClass={colorClass}
            product={product}
            // currency={currency}
            addToCart={addToCart}
            cartData={cartData}
            // addToWishlist={addToWishlist}
            // addToCompare={addToCompare}
            // cartItem={cartItems}
            // cartItems.filter((cartItem) => cartItem.id === product.id)[0]
            // }
            // wishlistItem={
            //   wishlistItems.filter(
            //     (wishlistItem) => wishlistItem.id === product.id
            //   )[0]
            // }
            // compareItem={
            //   compareItems.filter(
            //     (compareItem) => compareItem.id === product.id
            //   )[0]
            // }
            key={product.id}
            titlePriceClass={titlePriceClass}
          />
        );
      })}
    </Fragment>
  );
};

ProductGridTwo.propTypes = {
  addToCart: PropTypes.func,
  // addToCompare: PropTypes.func,
  // addToWishlist: PropTypes.func,
  compareItems: PropTypes.array,
  currency: PropTypes.object,
  products: PropTypes.array,
  sliderClassName: PropTypes.string,
  spaceBottomClass: PropTypes.string,
  colorClass: PropTypes.string,
  titlePriceClass: PropTypes.string,
  wishlistItems: PropTypes.array
};

const mapStateToProps = (state, ownProps) => {
  return {
    // products: getProducts(
    //   state.productData.products,
    //   ownProps.category,
    //   ownProps.type,
    //   ownProps.limit
    // ),
    // currency: state.currencyData,
    cartData: state.cartData.cartItems
    // wishlistItems: state.wishlistData,
    // compareItems: state.compareData
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (
      item,
      addToast,
      cartData,
      quantityCount,
      selectedProductColor
      // selectedProductColor,
      // selectedProductSize
    ) => {
      console.log(cartData)
      let index = isValidObject(cartData) ? cartData.products.findIndex(order => order.id === item.id) : -1;
      dispatch(
        addToCart(
          item,
          addToast,
          cartData.code,
          index === -1 ? quantityCount : cartData.products[index].quantity + quantityCount,
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductGridTwo);
