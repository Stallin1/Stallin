import React, { useState } from "react";
import { shops } from "../../../Data/shops/shop-data";
import Title from "../../Basic Components/Title/title";
import "./main.css";
import HomepageCard from "./homepageCard";

const Main = () => {
  return (
    <main>
      <Title colorValue="Best " normalValue="Seller" pickedColor="#3DC242" />
      <BestSeller />
      <Title colorValue="Offer " pickedColor="#3DC242" />
      <Offers />
      <Title colorValue="Shop " pickedColor="#3DC242" />
      <Mapping />
    </main>
  );
};

const BestSeller = () => {
  return (
    <div className="multicard-container">
      {shops.map((shop) => {
        if (shop.bestseller === "#bestseller") {
          return <HomepageCard key={shop.id} {...shop} />;
        }
      })}
    </div>
  );
};

const Offers = () => {
  return (
    <div className="multicard-container">
      {shops.map((shop) => {
        if (shop.offers != "") {
          return <HomepageCard key={shop.id} {...shop} />;
        }
      })}
    </div>
  );
};

const Mapping = () => {
  return (
    <div className="multicard-container">
      {shops.map((shop) => {
        return <HomepageCard key={shop.id} {...shop} />;
      })}
    </div>
  );
};

export default Main;
