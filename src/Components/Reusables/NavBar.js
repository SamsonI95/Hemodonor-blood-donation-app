import React, { useState } from "react";
import { Link } from "react-router-dom";
import Popup from "./Popup";
import { Button } from "./Button";
import "./NavBar.css";

const NavBar = () => {
  //button logic
  const [button, setButton] = useState(true);

  //Navbar link logic
  const [selectedLink, setSelectedLink] = useState(null);
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  //dropdown logic
  const [popup, setPopup] = useState(false);
  const handlePopupClick = () => {
    setPopup(!popup);
  };

  return (
    <>
      <nav>
        <ul className="nav-menu-items">
          <Link
            to="/home"
            onClick={() => handleLinkClick("home")}
            className={selectedLink === "home" ? "selected" : ""}
          >
            Home
          </Link>
          <a href="#">About Us</a>
          <Link
            to="/donate-blood"
            onClick={() => handleLinkClick("donate")}
            className={selectedLink === "donate" ? "selected" : ""}
          >
            Donate Blood
          </Link>
          <a href="#">Find Donor</a>
          <Link
            to="#"
            onClick={() => handlePopupClick()}
            className={selectedLink === "register" ? "selected" : ""}
          >
            Register
          </Link>
          <a href="#">Contact Us</a>
        </ul>
        <div className="button">
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--small">
              Get Started
            </Button>
          )}
        </div>
      </nav>
      {popup && <Popup />} {/* Render the dropdown conditionally */}
    </>
  );
};

export default NavBar;
