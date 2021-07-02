import React from "react";
import "./shop-profile.scss";
import { JhunJhunWala1, JhunJhunWala2 } from "./shop-component";

const Details = () => {
  return (
    <>
      <Detailcontent name={JhunJhunWala1} />
    </>
  );
};

const Detailcontent = (props) => {
  return (
    <DetailCard
      bestseller={props.name.bestseller}
      image={props.name.image}
      name={props.name.name}
      category={props.name.category}
      address={props.name.address}
      direction={props.name.direction}
      map={props.name.map}
      offers={props.name.offers}
      star={props.name.star}
      rating={props.name.rating}
    />
  );
};

const DetailCard = (details) => {
  return (
    <div className="details-main">
      <div className="details-bestseller">{details.bestseller}</div>
      <img className="details-image" src={details.image} alt={details.name} />
      <div className="details-content-child">
        <div className="details-name">{details.name}</div>
        <div className="details-category">{details.category}</div>
        <div className="details-address">{details.address}</div>
        <div className="details-direction">
          {details.direction}
          <a className="details-map" href={details.map}>
            <img
              src="https://img.icons8.com/color/48/000000/google-maps.png"
              alt="Get direction"
            />
          </a>
        </div>
        <div className="details-offers">{details.offers}</div>
        <div className="details-star">
          <StarRatingPositive positive={details.star} />
          <StarRatingFraction fraction={details.star} />
          <StarRatingNegative negative={details.star} />
          <span className="details-rating">
            <span className="details-rating-average">{details.star}</span>
            &nbsp;({details.rating})
          </span>
        </div>
      </div>
    </div>
  );
};

const StarRatingPositive = (starratepositive) => {
  var x = parseFloat(starratepositive.positive);
  var y = parseInt(x / 1);
  return [...Array(y)].map(() => {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "#FFD911",
        }}
      ></div>
    );
  });
};

const StarRatingFraction = (starratefraction) => {
  var x = parseFloat(starratefraction.fraction);
  // var y = parseInt(x / 1);
  var z = x % 1;

  if (z === 0) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "#fff",
        }}
      ></div>
    );
  } else if (z > 0 && z <= 0.1) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 10%, #fff 10%)",
        }}
      ></div>
    );
  } else if (z > 0.1 && z <= 0.2) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 20%, #fff 20%)",
        }}
      ></div>
    );
  } else if (z > 0.2 && z <= 0.3) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 30%, #fff 30%)",
        }}
      ></div>
    );
  } else if (z > 0.3 && z <= 0.4) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 40%, #fff 40%)",
        }}
      ></div>
    );
  } else if (z > 0.4 && z <= 0.5) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 50%, #fff 50%)",
        }}
      ></div>
    );
  } else if (z > 0.5 && z <= 0.6) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 60%, #fff 60%)",
        }}
      ></div>
    );
  } else if (z > 0.6 && z <= 0.7) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 70%, #fff 70%)",
        }}
      ></div>
    );
  } else if (z > 0.7 && z <= 0.8) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 80%, #fff 80%)",
        }}
      ></div>
    );
  } else if (z > 0.8 && z < 1) {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "linear-gradient(90deg,#FFD911 90%, #fff 90%)",
        }}
      ></div>
    );
  }
};

const StarRatingNegative = (starratenegative) => {
  var x = parseFloat(starratenegative.negative);
  var y = parseInt(x / 1);
  return [...Array(4 - y)].map(() => {
    return (
      <div
        className="detail-star-rating"
        style={{
          background: "#fff",
        }}
      ></div>
    );
  });
};

export default Details;
