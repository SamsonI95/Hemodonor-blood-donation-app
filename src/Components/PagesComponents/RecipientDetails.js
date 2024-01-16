//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Component
import { Button } from "../Reusables/Button";
import Accordion from "../Reusables/Accordion";

//Data
import { BloodGroup } from "../Data Folder/BloodGroupData";
import { states } from "../Data Folder/StateLgaData";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//Style
import "./RecipientDetails.css";

const RecipientDetails = () => {
  const [button] = useState(true);

  const renderOption = (option) => {
    return (
      <div key={option.id}>
        <h3>{option.label}</h3>
        <p>{option.value}</p>
      </div>
    );
  };

  const renderStateOption = (state) => {
    return (
      <div key={state.name}>
        <h3>{state.name}</h3>
        <ul>
          {state.localGovts.map((lg, index) => (
            <li key={index}>{lg}</li>
          ))}
        </ul>
      </div>
    );
  };

  const navigate = useNavigate();

  const handleRecipientSubmit = (e) => {
    e.preventDefault();

    console.log("Blood Group:", BloodGroup);
    console.log("State:", states);

    navigate("/donor-select")

  }

  return (
    <>
      <div className="rd-container">
        <div className="rd-image-container">
          <img
            src="/assets/medicine-uniform-healthcare-medical-workers-day-concept.png"
            alt="doc-image"
          />
        </div>
        <div className="rd-details-container">
          <div className="bg-select">
            <h3>Recipient Details</h3>
            <p>Blood Group</p>
            <Accordion
              title="Select Blood Group"
              width="200px"
              height="45px"
              data={BloodGroup}
              renderOption={renderOption}
            />
          </div>
          <div className="bg-button-1">
            {button && (
              <Button buttonStyle="btn--validate2" buttonSize="btn--xmedium">
                Current Location
              </Button>
            )}
          </div>
          <h4>OR</h4>
          <div className="bg-select-2">
            <p>State</p>
            <Accordion
              title="State"
              width="200px"
              height="45px"
              data={states}
              renderOptions={renderStateOption}
            />
          </div>
          <div className="bg-select-3">
            <p>Local Govt</p>
            <Accordion
              title="Select Local Govt"
              width="200px"
              height="45px"
              data={states}
              renderOptions={renderStateOption}
            />
          </div>
          <div className="bg-button-2">
            {button && (
              <Button buttonStyle="btn--validate2" buttonSize="btn--medium" onClick={handleRecipientSubmit}>
                Proceed
                <FontAwesomeIcon icon={faChevronRight} />
              </Button>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default RecipientDetails;
