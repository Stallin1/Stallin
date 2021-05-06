import Cart from "./cart-structure";
import carts from "./cartitems";

const CartMap = () => {
  return carts.map((cart) => {
    return <Cart key={cart.id} {...cart}></Cart>;
  });
};

const CartFinal = () => {
  return (
    <div className="cart-final">
      <h2>Picked Items</h2>
      <CartMap />
      <div className="cart-total">Total : </div>
      <div className="cart-price">totalprice</div>
      <div className="cart-proceed">PROCEED TO BUY</div>
    </div>
  );
};

export default CartFinal;
