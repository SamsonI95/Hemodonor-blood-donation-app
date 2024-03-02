import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebookF,
  faXTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const [button, setButton] = useState(true);

  return (
    <>
      <footer>
        <div className="footer-donate">
          <div className="footer-logo-container">
            <img src="assets/footer-Logo.png" alt="logo" />
          </div>
          <h3>Ready to get started?</h3>
          {button && (
            <Button buttonStyle="btn--primary" buttonSize="btn--small">
              Donate
            </Button>
          )}
        </div>
        <div className="footer-middle-content-contaier">
          <div className="newsletter">
            <h3>Subscribe to our newsletter</h3>
            <div className="email-field">
              <input type="email" placeholder="Email address" />
              {button && (
                <Button buttonStyle="btn--primary" buttonSize="btn--arrow">
                  <FontAwesomeIcon icon={faChevronRight} />
                </Button>
              )}
            </div>
            <div className="legal-card">
              <Link to="/terms">Terms & Conditions</Link>
              <Link to="/privacy">Privacy Policy</Link>
            </div>
          </div>
          <div className="content-1">
            <ul>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Email Marketing</a>
              </li>
              <li>
                <a href="#">Campaigns</a>
              </li>
              <li>
                <a href="#">Branding</a>
              </li>
              <li>
                <a href="#">Offline</a>
              </li>
            </ul>
          </div>
          <div className="content-2">
            <ul>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Our Story</a>
              </li>
              <li>
                <a href="#">Benefits</a>
              </li>
              <li>
                <a href="#">Team</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
            </ul>
          </div>
          <div className="content-3">
            <ul>
              <li>
                <a href="#">Help</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
            <div className="socials-container">
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span>
                <FontAwesomeIcon icon={faXTwitter} />
              </span>
              <span>
                <FontAwesomeIcon icon={faInstagram} />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
