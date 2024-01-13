import React, { useState } from "react";
import { Button } from "../Reusables/Button";
import "./DonorForm.css";

const DonorForm = () => {
  //validation logic
  const [checkboxChecked, setCheckboxChecked] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [age, setAge] = useState("");
  const [bloodGroup, setBloodGroup] = useState("");
  const [state, setState] = useState("");
  const [lga, setLga] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [month, setMonth] = useState("");
  const [year, setYear] = useState("");

  const handleCheckboxChange = () => {
    setCheckboxChecked(!checkboxChecked);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform submit logic here if needed
    if (
      checkboxChecked &&
      firstName &&
      lastName &&
      phoneNumber &&
      email &&
      address &&
      age &&
      bloodGroup &&
      state &&
      lga &&
      postalCode &&
      month &&
      year
    ) {
      // Add your submission logic here
      console.log("Form submitted successfully!");
    } else {
      console.log("Please fill in all fields and accept the terms.");
    }
  };

  //Button styling and typed
  const [button, setButton] = useState(true);

  return (
    <>
      <div className="donor-header">
        <h3>Register as a donor</h3>
      </div>
      <form className="donor-form" onSubmit={handleSubmit}>
        <div className="name">
          <h3>Full Name</h3>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="phone">
          <h3>Phone Number</h3>
          <input
            type="tel"
            placeholder="Enter phone number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </div>
        <div className="email">
          <h3>Email</h3>
          <input
            type="email"
            placeholder="Enter email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="personal-data">
          <div className="address">
            <h3>Address</h3>
            <input
              type="text"
              placeholder="Type here"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <div className="age">
            <h3>Age</h3>
            <input
              type="text"
              placeholder="Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </div>
          <div className="blood-group">
            <h3>Blood Group</h3>
            <input
              type="text"
              value={bloodGroup}
              onChange={(e) => setBloodGroup(e.target.value)}
            />
          </div>
          <div className="state">
            <h3>State</h3>
            <input
              type="text"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="lga">
            <h3>LGA</h3>
            <input
              type="text"
              value={lga}
              onChange={(e) => setLga(e.target.value)}
            />
          </div>
          <div className="postal">
            <h3>Postal Code</h3>
            <input
              type="text"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />
          </div>
        </div>
        <div className="time-frame">
          <h3>Last Duration</h3>
          <input
            type="text"
            placeholder="Month"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          />
          <input
            type="text"
            placeholder="Year"
            value={year}
            onChange={(e) => setYear(e.target.value)}
          />
        </div>
        <div className="validate">
          <input
            type="checkbox"
            checked={checkboxChecked}
            onChange={handleCheckboxChange}
          />
          <p>You acknowledge the use of your personal information</p>
        </div>
        <div className="submit">
          {button && (
            <Button
              type="submit"
              buttonStyle="btn--validate"
              buttonSize=".btn--small"
              disabled={
                !checkboxChecked ||
                !firstName ||
                !lastName ||
                !phoneNumber ||
                !email ||
                !address ||
                !age ||
                !bloodGroup ||
                !state ||
                !lga ||
                !postalCode ||
                !month ||
                !year
              }
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default DonorForm;
