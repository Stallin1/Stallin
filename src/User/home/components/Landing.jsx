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

function Landing() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
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
            href="/#"
          >
            <AccountCircleIcon style={navLink} />
          </Button>

          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Link to="/login">
              <MenuItem onClick={handleClose}>Login</MenuItem>
            </Link>
            <Link to="/signup">
              <MenuItem onClick={handleClose}>Sign Up</MenuItem>
            </Link>
          </Menu>
        </div>
      </nav>
      <div className="searchbar-wrapper-for-Landing-page">
        <Searchbar placeholder="Search for stores" />
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
          <img src={LandingImg} alt="Stallin landing page " />
        </div>
      </div>
    </header>
  );
}

export default Landing;
