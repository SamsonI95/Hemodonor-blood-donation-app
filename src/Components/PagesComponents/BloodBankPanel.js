//App
import React, { useState } from "react";

//Data
import { BankList } from "../Data Folder/BankListData";

//Component
import { Button } from "../Reusables/Button";

//Style
import "./BloodBankPanel.css";

const BloodBankPanel = () => {
  const [button] = useState(true);

  return (
    <>
      <div className="bank-card-container">
        {BankList.map((bank, index) => (
          <div key={index} className="blood-bank-entry">
            <div className="bank-card-button">
              {button && (
                <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                  <h4>View Location</h4>
                </Button>
              )}
            </div>
            <div className="blood-bank-entry-text">
              <h3>{bank.title}</h3>
              <p className="cnam">{bank.address}</p>
              <p className="cnum">Contact Number: {bank.contact}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default BloodBankPanel;
