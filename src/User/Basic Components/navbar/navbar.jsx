import React, { useState } from "react";
import { Link } from "react-router-dom";
import Badge from "@material-ui/core/Badge";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import MenuItem from "@material-ui/core/MenuItem";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import ShoppingCartOutlinedIcon from "@material-ui/icons/ShoppingCartOutlined";
import Searchbar from "../Home/Searchbar";
import "../Home/Landing.css";
import "./navbar.css";
import Logo from "../Images/logo.png";

const navLink = {
  color: "#000",
  fontSize: "30px",
};

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <React.Fragment>
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
            <Link to="/profile">
              <MenuItem onClick={handleClose}>Profile</MenuItem>
            </Link>
            <MenuItem onClick={handleClose}>Log out</MenuItem>
          </Menu>
        </div>
      </nav>
      <div className="Searchbar-wrapper">
        <Searchbar placeholder="Search for stores" />
      </div>
    </React.Fragment>
  );
}

export default Navbar;
