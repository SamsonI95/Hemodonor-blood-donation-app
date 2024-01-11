import React, {useState} from 'react'

const OtpForm = () => {
    const [phoneNumber, setPhoneNumber] = useState('');
    const [otp, setOtp] = useState('');
    const [currentStep, setCurrentStep] = useState(1);
  
    const handlePhoneNumberSubmit = (e) => {
      e.preventDefault();
      // Validate the phone number (you can add your own validation logic)
      // If valid, move to the next step
      setCurrentStep(2);
    };
  
    const handleOtpSubmit = (e) => {
      e.preventDefault();
      // Validate the OTP (you can add your own validation logic)
      // If valid, you can perform further actions (e.g., authentication)
      console.log('Phone Number:', phoneNumber);
      console.log('OTP:', otp);
    };


  return (
    <div className="form-container">
      {currentStep === 1 ? (
        <form onSubmit={handlePhoneNumberSubmit}>
          <label className="label">
            Phone Number:
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              className="input"
            />
          </label>
          <button type="submit" className="button">
            Submit Phone Number
          </button>
        </form>
      ) : (
        <form onSubmit={handleOtpSubmit}>
          <label className="label">
            OTP:
            <input
              type="text"
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="input"
            />
          </label>
          <button type="submit" className="button">
            Submit OTP
          </button>
        </form>
      )}
    </div>
  );
}

export default OtpForm;