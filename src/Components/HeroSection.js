import React, { useState } from "react";
import "./HeroSection.css";
import { Button } from "./Button";
import { PrcData } from "./PrcData";

function HeroSection() {
  const [button, setButton] = useState(true);

  return (
    <>
      <div className="main-donate-card">
        <h3>CONNECTING LIVES SAVERS WITH LIVES IN NEED</h3>
        <p>
          We are on a mission to rediscover hope and save lives. just one blood
          donation can save lives or up to three people.
        </p>
        {button && (
          <Button buttonStyle="btn--primary" buttonSize="btn--small">
            Donate Now
          </Button>
        )}
        <div className="donor-search-container">
          <p>Find a Donor/Find a recipient</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter address or Blood Type" />
            <div className="bottom-right-radius"></div>
            {button && (
              <Button buttonStyle="btn--primary" buttonSize="btn--search">
                Search
              </Button>
            )}
          </div>
        </div>
        <h4>Trusted by 5k+ users</h4>
      </div>
      <div className="sponsors-container">
        <img src="assets/image 11.svg" />
        <img src="assets/image 10.svg" />
        <img src="assets/image 8.svg" />
        <img src="assets/image 7.svg" />
        <img src="assets/image 6.svg" />
        <img src="assets/image 5.svg" />
      </div>
      <div className="donate-start-card1">
        <img src="assets/africa-humanitarian-aid-doctor-taking-care-patient.svg" />
        <h3>Join us, Donate Blood and Save Lives</h3>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy </p>
        {button && (<Button buttonStyle="btn--primary" buttonSize="btn--small">Get Started</Button>)}
      </div>
      <div className="product-card1-container">
        {
          PrcData.map((d) => (
            <>
              <div className="product-card1">
                <div className="card-image">
                  <img src={image} />
                </div>
                <div className="card-text">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <div className="card-button">
                {button && (<Button buttonStyle="btn--primary" buttonSize="btn--small">{buttonName}</Button>)}
                </div>
              </div>
            </>
          ))
        }
      </div>
    </>
  );
}

export default HeroSection;
