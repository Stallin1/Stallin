import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.css";

function Searchbar(props) {
  return (
    <div className="searchbar-container">
      <a href="/#" className="location-btn">
        Location
        <LocationOnIcon style={{ color: "#F44336" }} />
      </a>
      <input
        className="searchbox"
        type="text"
        placeholder={props.placeholder}
      />
      <a href="/#" type="submit" className="search-btn">
        <SearchIcon style={{ fontSize: "35px" }} />
      </a>
    </div>
  );
}

export default Searchbar;
