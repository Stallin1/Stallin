import Mapping from "./mapping";
// import Categories from "./categories";
import { useState } from "react";

// const allCategories = [
//   "all",
//   ...new Set(props.product.map((item) => item.category)),
// ];
const Main = (props) => {
  //   const [menuItems, setMenuItems] = useState(props.name);
  // const [color, setColor] = useState("green");
  //   const [categories, setCategories] = useState(allCategories);

  //   const filterItems = (category) => {
  //     if (category === "all") {
  //       setMenuItems(props.name);
  //       return;
  //     }
  //     const newItems = props.name.filter((item) => item.category === category);
  //     setMenuItems(newItems);
  //   };
  return (
    <div className="main-body">
      {/* <Categories categories={categories} filterItems={filterItems} />
      <div className="line"></div> */}

      <Mapping name={props.name} />
    </div>
  );
};

export default Main;
