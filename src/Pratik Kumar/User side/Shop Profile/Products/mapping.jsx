import React, { useState } from "react";
import ProductCardDesign from "./structure";

const Mapping = ({ items }) => {
  const [searchFilter, setSearchFilter] = useState("");
  const [sortType, setSortType] = useState("Name");
  return (
    <div>
      <input
        type="text"
        placeholder="Search For Products"
        onChange={(event) => {
          setSearchFilter(event.target.value);
        }}
      />
      <select
        name=""
        id="products"
        onChange={(event) => {
          setSortType(event.target.value);
        }}
      >
        <option value="Name">Name</option>
        <option value="Price">Price</option>
      </select>
      {items
        .sort((a, b) => {
          if (sortType == "Name") {
            if (a.name > b.name) {
              return 1;
            } else {
              return -1;
            }
          } else if (sortType == "Price") {
            if (parseInt(a.price) > parseInt(b.price)) {
              return 1;
            } else {
              return -1;
            }
          }
        })
        .filter((prod) => {
          if (searchFilter == "") {
            return prod;
          } else if (
            prod.name.toLowerCase().includes(searchFilter.toLowerCase())
          ) {
            return prod;
          }
        })
        .map((prod) => {
          return (
            <ProductCardDesign key={prod.id} {...prod}></ProductCardDesign>
          );
        })}
    </div>
  );
};

export default Mapping;
