import React from "react";
import "./homepageCard.css";
import Rating from "@material-ui/lab/Rating";
import MailIcon from "@material-ui/icons/Mail";
import { Link } from "react-router-dom";

function homepageCard(props) {
  return (
    <div className="card-container">
      <div className="cover-img-container">
        <img src={props.image} alt={props.name} className="card-cover" />
        <span className="overlay-plate">
          <span className="overlay-links">
            <a href={props.socialLinks}>
              <MailIcon fontSize="small" />
            </a>
            <a href={props.socialLinks}>
              <MailIcon fontSize="small" />
            </a>
            <a href={props.socialLinks}>
              <MailIcon fontSize="small" />
            </a>
          </span>
          <span>
            <span className="shopcard-name">
              <p>{props.name}</p>
            </span>
          </span>
        </span>
      </div>
      <div className="card-content-container">
        <div className="card-name-category">
          <h3>{props.name}</h3>
          <h4>{props.category}</h4>
        </div>
        <div>
          <h5 className="content-location">{props.direction}</h5>
        </div>
        <div className="direction-btn-container">
          <a className="direction-btn" href={props.map}>
            <span className="map-icon-wrapper">
              <img
                className="map-icon"
                src="https://img.icons8.com/fluent/48/000000/google-maps-new.png"
                alt="google map icon"
              />
            </span>
            Get direction
          </a>
        </div>
        <div className="discount-offer">
          <img src={props.offerImage} alt="sicount tag" />
          <span>{props.offers}</span>
        </div>
        <div>
          <Rating
            name="half-rating-read"
            defaultValue={props.star}
            precision={0.1}
            readOnly
          />
          <span className="rating-wrapper">
            <b>{props.star}</b> <span> ({props.rating})</span>
          </span>
        </div>
      </div>
      <div className="card-button-container">
        <Link to={props.link}>
          <div className="card-btn">Shop Now</div>
        </Link>
      </div>
    </div>
  );
}

export default homepageCard;
