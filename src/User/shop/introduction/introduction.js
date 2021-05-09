// import StarRatingPositive from "../../Basic Components/star-rating";
// import StarRatingFraction from "../../Basic Components/star-rating";
// import StarRatingNegative from "../../Basic Components/star-rating";

import "./introduction.scss";

const ShopIntro = (props) => {
  return (
    <IntroCard
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

const IntroCard = (details) => {
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
          {/* <StarRatingPositive positive={details.star} /> */}
          {/* <StarRatingFraction fraction={details.star} />
          <StarRatingNegative negative={details.star} /> */}
          <span className="details-rating">
            <span className="details-rating-average">{details.star}</span>
            &nbsp;({details.rating})
          </span>
        </div>
      </div>
    </div>
  );
};

export default ShopIntro;
