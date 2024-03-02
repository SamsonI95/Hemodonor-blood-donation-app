import React, { useState } from "react";
import { Button } from "../Reusables/Button";
import "./OrgForm.css";

const OrgForm = () => {
  //Button styling and typed
  const [button, setButton] = useState(true);

  return (
    <>
      <div className="donor-header">
        <h3>Register as a Organisation</h3>
      </div>
      <form className="org-form">
        <div className="name">
          <h3>Organization Name</h3>
          <input type="text" placeholder="Name" />
        </div>
        <div className="oaddress">
          <h3>Address</h3>
          <input type="text" placeholder="Type here" />
        </div>
        <div className="head">
          <h3>Head of Organization</h3>
          <input type="text" placeholder="Name" />
        </div>
        <div className="phone">
          <h3>Phone Number</h3>
          <input type="tel" placeholder="Enter phone number" />
        </div>
        <div className="submit">
          {button && (
            <Button
              type="submit"
              buttonStyle="btn--validate"
              buttonSize=".btn--small"
            >
              Submit
            </Button>
          )}
        </div>
      </form>
    </>
  );
};

export default OrgForm;
