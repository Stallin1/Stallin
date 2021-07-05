import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Logo from "../../Images/logo.png";
import LandingImg from "../../Images/Landing-img.svg";
import "./Landing.css";
import Searchbar from "./Searchbar";

const navLink = {
   color: "#fff",
   fontSize: "30px",
};
const navbarLink = {
   textDecoration: "none",
   color: "#000",
};
const menuLinks = {
   transform: "translate(-9px, 7px)",
};

function Landing() {
   const [anchorEl, setAnchorEl] = useState(null);

   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };

   const handleClose = () => {
      setAnchorEl(null);
   };
   const handelSearch = () => {
      alert("hi");
   };
   const searchBar = (e) => {
      const value = e.target.value;
      alert(`Search Changed to ` + value);
   };

   return (
      <header className="Top-section">
         <nav className="Nav-bar">
            <div className="Left-nav">
               <img src={Logo} className="Home-logo" alt="Stallin's Logo" />
            </div>
            <div className="Right-nav">
               <Link to="/cart">
                  <Button>
                     <Badge badgeContent={0} color="secondary" showZero>
                        <ShoppingCartOutlinedIcon style={navLink} />
                     </Badge>
                  </Button>
               </Link>
               <Button
                  aria-controls="simple-menu"
                  aria-haspopup="true"
                  onClick={handleClick}
               >
                  <AccountCircleIcon style={navLink} />
               </Button>

               <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={handleClose}
                  style={menuLinks}
               >
                  <Link to="/login" style={navbarLink}>
                     <MenuItem onClick={handleClose}>Login</MenuItem>
                  </Link>
                  <Link to="/signup" style={navbarLink}>
                     <MenuItem onClick={handleClose}>Sign Up</MenuItem>
                  </Link>
               </Menu>
            </div>
         </nav>
         <div className="searchbar-wrapper-for-Landing-page">
            <Searchbar
               placeholder="Search for stores"
               onClick={handelSearch}
               onChange={searchBar}
            />
         </div>

         <div className="landing-container">
            <div className="Landing-text-container">
               <h1 className="Brand">STALLIN</h1>
               <p className="tagline">Markets on your finger tip</p>
               <a href="/#" className="Landing-btn">
                  EXPLORE
               </a>
            </div>
            <div className="Landing-img-container">
               <img
                  className="Landing-Img"
                  src={LandingImg}
                  alt="Stallin landing page "
               />
            </div>
         </div>
      </header>
   );
}

export default Landing;
