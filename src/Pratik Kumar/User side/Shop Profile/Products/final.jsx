import React, { useState } from "react";
import "./main.scss";
import Mapping from "./mapping";
import items from "./products-list";
import Categories from "./categories";
import CartFinal from "./cart-mapping";
const allCategories = ["all", ...new Set(items.map((item) => item.category))];

const Final = () => {
  const [menuItems, setMenuItems] = useState(items);
  // const [color, setColor] = useState("green");
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }
    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <div className="main-body">
      <Categories categories={categories} filterItems={filterItems} />
      <div className="line"></div>

      <Mapping items={menuItems} />
      <CartFinal />
    </div>
  );
};

export default Final;
