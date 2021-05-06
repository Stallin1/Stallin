import * as actionTypes from "./cart-types";

const INITIAL_STATE = {
  products: [],
  cart: [],
};

const cartReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.ADD_TO_CART: {
      return {};
    }
    case actionTypes.REMOVE_TO_CART: {
      return {};
    }
    case actionTypes.ADJUST_QUANTITY: {
      return {};
    }
    default: {
      return state;
    }
  }
};

export default cartReducer;
