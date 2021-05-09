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

export default { StarRatingPositive, StarRatingFraction, StarRatingNegative };
