import React from "react";

const Cart = (cart) => {
  return (
    <>
      <img className="cart-image" src={cart.image} alt={cart.name} />
      <div className="cart-name">{cart.name}</div>
      <div className="cart-catrgory">{cart.category}</div>
      <div className="cart-totalprice">{cart.totalPrice}</div>
      <div className="cart-totalamount">{cart.totalAmount}</div>
      <div className="cart-edit">
        <i class="fas fa-pen"></i>
      </div>
      <div className="cart-remove">
        <i class="fas fa-trash-alt"></i>
      </div>
      <div className="cart-dash"></div>
    </>
  );
};

export default Cart;
