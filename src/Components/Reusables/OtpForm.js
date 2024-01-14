//App
import React, { useState } from "react";
import "./OtpForm.css";

//Components
import { Button } from "./Button";

const SERVER_IP = "http://localhost:4000";

const OtpForm = () => {
  const [phone_number, setPhoneNumber] = useState(""); // Set default Numeber to "1234567890"
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState("");
  const [button] = useState(true);

  async function sendCode() {
    await fetch(SERVER_IP + "/api/send-code", {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone_number:phone_number }),
    }).then((response) => {
      console.log(response);
      if (response.ok === true) {
        alert("Verification code sent successfully");
        setCodeSent(true);
      } else alert("Oh no we have an error");
    });
  }
  async function verifyCode() {
    await fetch(SERVER_IP + "/api/verify-code", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ phone_number: phone_number, code: code }),
    }).then((response) => {
      console.log(response);
      if (response.ok === true) {
        alert("Number verified successfully");
      } else alert("Oh no we have an error");
    });
  }

  return (
    <div className="form-container">
      {!codeSent ? (
        <form className="otp-form">
          <h3>Registration</h3>
          <p>An OTP will be sent to your mobile number for verification</p>
          <input
            type="text"
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter  your mobile number"
            className="input"
          />
          <div className="button-reg">
            {button && (
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--small"
                onClick={async () => await sendCode()}
              >
                Get OTP
              </Button>
            )}
          </div>
        </form>
      ) : (
        <form>
          <h3>OTP Verification</h3>
          <p>An OTP has been sent to XXX XXX XXXX</p>
          <div className="otp-input-container">
            {code.map((digit, index) => (
              <input
                key={index}
                type="text"
                value={digit}
                onChange={(e) => setCode(e.target.value)}
                maxLength="1"
                className="otp-input"
              />
            ))}
          </div>
          <div className="button-reg">
            {button && (
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--medium"
                onClick={async () => await verifyCode()}
              >
                Verify & Proceed
              </Button>
            )}
          </div>
        </form>
      )}
    </div>
  );
};

export default OtpForm;
