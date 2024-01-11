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
            <Link to="/home">Home</Link>
            <a href="#">About Us</a>
            <Link to="/donate-blood">Donate Blood</Link>
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
