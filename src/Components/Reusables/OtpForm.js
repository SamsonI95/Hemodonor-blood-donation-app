//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./OtpForm.css";

//Components
import { Button } from "./Button";

const OtpForm = () => {
  const navigate = useNavigate();

  const [phoneNumber, setPhoneNumber] = useState("0901234567");
  const [otp, setOtp] = useState(["1", "2", "3", "4"]); // Default OTP: "1234"
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");

  const [button] = useState(true);

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();

    // Simple phone number validation
    if (/^\d{10}$/.test(phoneNumber)) {
      console.log("Phone number is valid. Switching to OTP step.");
      setCurrentStep(2);
      setError("");
    } else {
      setError("Invalid phone number. Please enter a valid 10-digit number.");
    }
  };

  const handleOtpSubmit = (e) => {
    e.preventDefault();

    // Simple OTP validation (4 digits)
    if (/^\d{4}$/.test(otp.join(""))) {
      // You can perform further actions here, e.g., authentication
      setError("");
      console.log("Phone Number:", phoneNumber);
      console.log("OTP:", otp.join(""));

       // Navigate to RecipientDetails component
       navigate("/recipient-details");
    } else {
      setError("Invalid OTP. Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <div className="form-container">
      {currentStep === 1 ? (
        <form className="otp-form" id="form-1">
          <h3>Registration</h3>
          <p>An OTP will be sent to your mobile number for verification</p>
          <input
            id="phoneNumber"
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter your mobile number"
            className="input"
          />
          <div className="button-reg">
            {button && (
              <Button
                buttonStyle="btn--primary"
                buttonSize="btn--small"
                onClick={handlePhoneNumberSubmit}
              >
                Get OTP
              </Button>
            )}
          </div>
        </form>
      ) : (
        <form className="otp-form" id="form-2" onSubmit={handleOtpSubmit}>
          <h3>OTP Verification</h3>
          <p>An OTP has been sent to XXX XXX XXXX</p>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
                id="code"
                key={index}
                type="text"
                value={digit}
                onChange={(e) =>
                  setOtp((prevOtp) => {
                    const newOtp = [...prevOtp];
                    newOtp[index] = e.target.value;
                    return newOtp;
                  })
                }
                maxLength="1"
                className="otp-input"
              />
            ))}
          </div>
          <div className="button-reg">
            {button && (
              <Button buttonStyle="btn--primary" buttonSize="btn--medium" onClick={handleOtpSubmit}>
                Verify & Proceed
              </Button>
            )}
          </div>
        </form>
      )}

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default OtpForm;
