import * as actionTypes from "./cart-types";

export const addToCart = (itemID) => {
  return {
    type: actionTypes.ADD_TO_CART,
    payload: {
      id: itemID,
    },
  };
};

export const removeFromCart = (itemID) => {
  return {
    type: actionTypes.REMOVE_TO_CART,
    payload: {
      id: itemID,
    },
  };
};
export const removeFromCart = (itemID, value) => {
  return {
    type: actionTypes.ADJUST_QUANTITY,
    payload: {
      id: itemID,
      qty: value,
    },
  };
};
