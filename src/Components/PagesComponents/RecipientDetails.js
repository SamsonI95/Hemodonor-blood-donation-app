//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Component
import { Button } from "../Reusables/Button";
import Select from "../Reusables/SelectOptionsModel";

//Data
import { BloodGroup } from "../Data Folder/BloodGroupData";
import { states } from "../Data Folder/StateLgaData";

//Icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

//Style
import "./RecipientDetails.css";

//Component Logic
const RecipientDetails = () => {
  const [button] = useState(true);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [selectedLGA, setSelectedLGA] = useState(null);
  const [isDataFilled, setIsDataFilled] = useState(false);

  const buttonStyle = isDataFilled
    ? "btn--validate2 btn--enabled"
    : "btn--validate2 btn--disabled";

  const navigate = useNavigate();

  const handleRecipientSubmit = (e) => {
    e.preventDefault();

    console.log("Blood Group:", selectedBloodGroup);
    console.log("State:", selectedState);
    console.log("Local Govt:", selectedState?.localGovts);

    navigate("/donor-select");
  };

  const handleStateSelect = (selectedState) => {
    console.log("Selected State:", selectedState);
    setSelectedState(selectedState);
    setSelectedLGA();
  };

  const handleLocalGovtSelect = (selectedLGA) => {
    console.log("Selected Local Government:", selectedLGA);
    setSelectedLGA(selectedLGA); // Corrected from selectedLGA to selectedLocalGovt
  };

  const handleBloodGroupSelect = (selectedBloodGroup) => {
    console.log("Selected Blood Group:", selectedBloodGroup);
    setSelectedBloodGroup(selectedBloodGroup);
  };

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
            <Select
              label=""
              options={BloodGroup.map((group) => group.bgroup)}
              onSelect={handleBloodGroupSelect}
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
            <p>Select State</p>
            <Select
              label=""
              options={states.map((state) => state.name)}
              onSelect={handleStateSelect}
            />
          </div>
          <div className="bg-select-3">
            <h3>Select Local Government</h3>
            <Select
              label=""
              options={selectedLGA ? selectedLGA.map((lga) => lga.localGovts) : []}
              onSelect={handleLocalGovtSelect}
            />
          </div>
          <div className="bg-button-2">
            {button && (
              <Button
                buttonStyle={buttonStyle}
                buttonSize="btn--medium"
                onClick={handleRecipientSubmit}
                disabled={!isDataFilled}
              >
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
