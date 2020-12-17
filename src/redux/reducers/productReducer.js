import { FETCH_PRODUCTS_SUCCESS, SET_PRODUCT_ID, SET_CATEGORY_ID } from "../actions/productActions";

const initState = {
  products: [],
  productid: '',
  categoryid: ''
};

const productReducer = (state = initState, action) => {

  if (action.type === FETCH_PRODUCTS_SUCCESS) {
    return {
      ...state,
      products: action.payload
    };
  }
  if (action.type === SET_PRODUCT_ID) {
    return {
      ...state,
      productid: action.payload
    };
  }
  if (action.type === SET_CATEGORY_ID) {
    return {
      ...state,
      categoryid: action.payload
    };
  }
  return state;
};

export default productReducer;
