import React from "react";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import SearchIcon from "@material-ui/icons/Search";
import "./Searchbar.css";

function Searchbar(props) {
   return (
      <div className="searchbar-container">
         <div>
            <button className="location-btn">
               Location
               <LocationOnIcon style={{ color: "#F44336" }} />
            </button>
            <input
               className="searchbox"
               type="text"
               placeholder={props.placeholder}
               onChange={props.onChange}
            />
            <button
               type="submit"
               onClick={props.onClick}
               className="search-btn"
            >
               <SearchIcon style={{ fontSize: "35px" }} />
            </button>
         </div>
      </div>
   );
}

export default Searchbar;
