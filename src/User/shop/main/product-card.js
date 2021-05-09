const ProductCardDesign = (product) => {
  return (
    <div className="productCard">
      <img
        className="productCardImage"
        src={product.image}
        alt={product.name}
      />
      <div className="productCardDetails">
        <div className="productCardDetails-name">{product.name}</div>
        <div className="productCardDetails-price">
          <span style={{ fontFamily: "Roboto", color: "#000" }}> &#x20B9;</span>
          &nbsp;
          {product.price} / <Quantity quantity={product.quantity} />
        </div>
        <div className="productCardDetails-dash"></div>
        <div className="productCardDetails-quantity">
          <Quantity quantity={product.quantity} />
        </div>
        <div className="productCardDetails-total">
          <span style={{ fontFamily: "Roboto", color: "#000" }}> &#x20B9;</span>
          &nbsp;Total
        </div>

        <button className="productCardDetails-add">ADD</button>
      </div>
    </div>
  );
};

const Quantity = (props) => {
  if (props.quantity === "piece") {
    return "Pc";
  } else if (props.quantity === "Kilogram") {
    return "Kg";
  } else {
    return "L";
  }
};

export default ProductCardDesign;
