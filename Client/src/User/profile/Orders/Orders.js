import React, { useState} from "react";
import { Grid, Paper } from "@material-ui/core";
import "./Orders.css";
import BottomTriangle from "@material-ui/icons/DetailsTwoTone";
import mapsImage from './maps-image.png';
const Orders = (props) => {
  return (
    <div>
      <OrderCard />
    </div>
  );
};
const OrderCard = () => {
    const [detailsToggle, detailsToggler] = useState(false);
    const onDetailsClicked = () => {
        detailsToggler(!detailsToggle);
  };
  return (
    <div>
      <Paper className="order" elevation={8}>
        <div className="flexRowContainer">
          <div className="flexColumnContainer">
            <span className="headingTextLight">Shop id #1</span>
            <span className="regularTextDark">Shop's Name</span>
            <span className="highlightedBlueText">Around 4 Kms from you</span>
            <div className="mapsContainer">
              <img src={mapsImage} alt="Google maps image" />
              <span className="smallTextDark">Get Direction</span>
            </div>
          </div>
          <div className="flexColumnContainer">
            <span className="headingTextLight">Ordered At</span>
            <span className="regularTextDark">10:00 AM</span>
          </div>
          <div className="flexColumnContainer">
            <span className="orderStatus">Pending</span>
            <span className="headingTextLight centerAlignText">Total Amt.</span>
            <span className="regularTextDark centerAlignText">₹999.99</span>
          </div>
        </div>
        <div className="bottom-bar" onClick={onDetailsClicked}>
          <span className="bottom-bar-text">Order List</span>
          <span className="detailsTriangleButton">
            <BottomTriangle />
          </span>
        </div>
        <div className={detailsToggle ? "order-list-container" : "hidden"}>
          <div className="order-list-item">
            <span className="headingTextLight">Product : Chips</span>
            <span className="headingTextLight">Quantity : 10</span>
            <span className="headingTextLight centerAlignText">
              Amount : 100
            </span>
          </div>
        </div>
      </Paper>
    </div>
  );
};
export default Orders;