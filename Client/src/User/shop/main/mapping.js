import ProductCardDesign from "./product-card";
import { jhunjhunwala } from "../../../Data/shops/shop-indivisual-data";
const Mapping = (props) => {
  return (
    <>
      {props.name.products.map((items) => {
        return <ProductCardDesign key={items.id} {...items} />;
      })}
    </>
  );
};

export default Mapping;
