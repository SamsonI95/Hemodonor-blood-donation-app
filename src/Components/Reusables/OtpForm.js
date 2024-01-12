//App
import React, { useState } from "react";
import "./OtpForm.css";

//Components
import { Button } from "./Button";

const OtpForm = () => {
  const [phoneNumber, setPhoneNumber] = useState("1234567890"); // Set default Numeber to "1234567890"
  const [otp, setOtp] = useState(["1", "2", "3", "4"]); // Set default OTP to "1234"
  const [currentStep, setCurrentStep] = useState(1);
  const [error, setError] = useState("");
  const [button, setButton] = useState(true);

  const handlePhoneNumberSubmit = (e) => {
    e.preventDefault();

    if (/^\d{11}$/.test(phoneNumber)) {
      console.log('Phone number is valid. Switching to OTP step.');
      setCurrentStep(2);
      setError("");
    } else {
      setError("Invalid phone number. Please enter a valid 11-digit number.");
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
    } else {
      setError("Invalid OTP. Please enter a valid 4-digit OTP.");
    }
  };

  return (
    <div className="form-container">
      {currentStep === 1 ? (
        <form onSubmit={handlePhoneNumberSubmit}>
          <h3>Registration</h3>
          <p>An OTP will be sent to your mobile number for verification</p>
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Enter  your mobile number"
            className="input"
          />
          <div className="button-reg">
            {button && (
              <Button buttonStyle="btn--primary" buttonSize="btn--small">
                Get OTP
              </Button>
            )}
          </div>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <h3>OTP Verification</h3>
          <p>An OTP has been sent to XXX XXX XXXX</p>
          <div className="otp-input-container">
            {otp.map((digit, index) => (
              <input
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
              <Button buttonStyle="btn--primary" buttonSize="btn--medium">
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
