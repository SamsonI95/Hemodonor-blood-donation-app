import React, { useState } from "react";
import { Link } from "react-router-dom";
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

  return (
    <>
      <nav>
        <ul className="nav-menu-items">
          <Link to="/home" onClick={() => handleLinkClick('home')} className={selectedLink === 'home' ? 'selected' : ''}>Home</Link>
          <a href="#">About Us</a>
          <Link to="/donate-blood"onClick={() => handleLinkClick('donate')} className={selectedLink === 'donate' ? 'selected' : ''}>Donate Blood</Link>
          <a href="#">Find Donor</a>
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
    </>
  );
};

export default NavBar;
