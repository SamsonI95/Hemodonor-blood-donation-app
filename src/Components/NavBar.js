import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./NavBar.css";

function NavBar() {
    const [button, setButton] = useState(true);


  return (
    <>
      <nav>
        <ul className="nav-menu-items">
            <a href="#">Home</a>
            <a href="#">About Us</a>
            <a href="#">Donate Blood</a>
            <a href="#">Find Donor</a>
            <a href="#">Contact Us</a>
        </ul>
        <div className="button">
            {button && (<Button buttonStyle="btn--primary" buttonSize="btn--small">Get Started</Button>)}
        </div>
      </nav>
    </>
  );
}

export default NavBar;
