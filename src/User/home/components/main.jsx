import React from "react";
import { shops } from "../../../Data/shops/shop-data";
import Title from "../../Basic Components/Title/title";
import "./main.css";
import HomepageCard from "./homepageCard";

const main = () => {
  return (
    <main>
      <Title colorValue="Best " normalValue="Seller" pickedColor="#3DC242" />
      <div className="multicard-container">
        {shops.map((shop) => {
          return <HomepageCard key={shop.id} {...shop} />;
        })}
      </div>
    </main>
  );
};

export default main;
