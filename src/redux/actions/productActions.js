export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const SET_PRODUCT_ID = "SET_PRODUCT_ID";
export const SET_CATEGORY_ID = "SET_CATEGORY_ID";

const fetchProductsSuccess = products => ({
  type: FETCH_PRODUCTS_SUCCESS,
  payload: products
});

// fetch products
export const fetchProducts = products => {
  return dispatch => {
    dispatch(fetchProductsSuccess(products));
  };
};
export const setProductID = (productID) => {
  return dispatch => {
    dispatch({
      type: SET_PRODUCT_ID,
      payload: productID
    });
  }
}
export const setCategoryID = (categoryID) => {

  return dispatch => {
    dispatch({
      type: SET_CATEGORY_ID,
      payload: categoryID
    });
  }
}
