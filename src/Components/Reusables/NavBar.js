import React, { useState } from "react";
import { Link } from "react-router-dom";
import Dropdown from "./Dropdown";
import { Button } from "./Button";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  //button logic
  const [button, setButton] = useState(true);

  //Navbar link logic
  const [selectedLink, setSelectedLink] = useState(null);
  const handleLinkClick = (link) => {
    setSelectedLink(link);
  };

  //dropdown logic
  const [dropdown, setDropdown] = useState(false);
  const handleDropdownClick = () => {
    setDropdown(!dropdown);
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
            onClick={() => handleDropdownClick()}
            className={selectedLink === "register" ? "selected" : ""}
          >
            Register
          </Link>
          <FontAwesomeIcon
            icon={faChevronDown}
            className="down-icon"
            onClick={() => handleDropdownClick()}
          />
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
      {dropdown && <Dropdown />} {/* Render the dropdown conditionally */}
    </>
  );
};

export default NavBar;
