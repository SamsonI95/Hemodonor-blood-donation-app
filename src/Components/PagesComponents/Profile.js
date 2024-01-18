//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

//Component
import { Button } from "../Reusables/Button";

//Icon
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell } from "@fortawesome/free-regular-svg-icons";

//Style
import "./Profile.css";

const Profile = () => {

    const Navigate = useNavigate();

    const handleEdit = (e) => {
        e.preventDefault();
          console.log("Form submitted successfully!");
          // Navigate to the OtpForm component
          Navigate("/edit-profile");
      };

  return (
    <>
      <div className="profile-main-container">
        <div className="user-detail">
          <div className="user-edit-profile">
            <div className="user-image">
              <img
                src="assets/medium-shot-male-flight-attendant-posing.png"
                alt="user"
              />
            </div>
            <div className="user-name">
              <h3>Chike Olaniyi</h3>
            </div>
            <div className="user-button">
              <div className="user-icon">
                <span>
                  <FontAwesomeIcon icon={faBell} />
                </span>
              </div>
              <Button
                type="submit"
                buttonStyle="btn--primary"
                buttonSize=".btn--small"
                onClick={handleEdit}
              >
                Edit Profile
              </Button>
            </div>
          </div>
          <div className="user-about">
            <h3>About</h3>
            <div className="user-requied">
              <ul className="required">
                <li>Full Name</li>
                <li>Email</li>
                <li>LGA</li>
                <li>Phone Number</li>
                <li>Postal code</li>
                <li>Age</li>
                <li>Blood Group</li>
                <li>Address</li>
                <li>Last Donation Date</li>
              </ul>
            </div>
            <div className="user-info">
              <ul className="info">
                <li>Chike Olaniyi</li>
                <li>chikeolaniyi@gamil.com</li>
                <li>Kosofe</li>
                <li>09012345678</li>
                <li>1011111</li>
                <li>25</li>
                <li>O+</li>
                <li>No 2, Obadeyi street</li>
                <li>01 - 10 - 2023</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="donation-history">
          <div className="dates">
            <img src="assets/Donation History.png" alt="donate-history" />
          </div>
        </div>
        <div className="user-calender">
          <img src="assets/Calendar.png" alt="calender" />
        </div>
      </div>
    </>
  );
};

export default Profile;
