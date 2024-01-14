//App
import React, { useState } from "react";
import "./OtpForm.css";

//Components
import { Button } from "./Button";

const OtpForm = () => {
  const [phone_number, setPhoneNumber] = useState('');
  const [codeSent, setCodeSent] = useState(false);
  const [code, setCode] = useState(['', '', '', '']);
  const [verificationStatus, setVerificationStatus] = useState('');

  const sendCode = () => {
    // Simulate sending OTP to the user's phone number (for testing purposes)
    // In a real-world scenario, this should be handled by a backend service
    // and returned to the client for verification.
    setCodeSent(true);
  };

  const verifyCode = () => {
    const enteredCode = code.join('');

    // Simulate verification (for testing purposes)
    // In a real-world scenario, this should be handled by a backend service
    // and returned to the client for verification.
    if (enteredCode === '1234') {
      setVerificationStatus('Verification successful!');
    } else {
      setVerificationStatus('Incorrect OTP. Please try again.');
    }
  };

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
            placeholder="Enter your mobile number"
            className="input"
          />
          <div className="button-reg">
            <button onClick={sendCode}>Get OTP</button>
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
                onChange={(e) => {
                  const newCode = [...code];
                  newCode[index] = e.target.value;
                  setCode(newCode);
                }}
                maxLength="1"
                className="otp-input"
              />
            ))}
          </div>
          <div className="button-reg">
            <button onClick={verifyCode}>Verify & Proceed</button>
          </div>
          <p>{verificationStatus}</p>
        </form>
      )}
    </div>
  );
};

export default OtpForm;
