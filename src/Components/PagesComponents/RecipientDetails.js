//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

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

  useEffect(() => {
    setIsDataFilled(selectedBloodGroup && (selectedState || selectedLGA));
  }, [selectedBloodGroup, selectedState, selectedLGA]);

  const handleBloodGroupSelect = (bgroup) => {
    setSelectedBloodGroup(bgroup);
  };

  const handleStateSelect = (state) => {
    setSelectedState(state);
  };

  const handleLGASubmit = (lga) => {
    setSelectedLGA(lga);
  };

  const handleStateChange = (state) => {
    setSelectedState(state.name);
    // For simplicity, using a predefined set of LGAs for each state
    const defaultLGAs = ["Select State First"];
    const lgas = state.localGovts || defaultLGAs;
    setSelectedLGA(lgas[0]); // Select the first LGA by default
  };

  const navigate = useNavigate();

  const handleRecipientSubmit = (e) => {
    e.preventDefault();

    console.log("Blood Group:", selectedBloodGroup);
    console.log("State:", selectedState);
    console.log("Local Govt:", selectedLGA);

    navigate("/donor-select");
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
            <Accordion
              title="Select Blood Group"
              width="200px"
              height="45px"
              data={BloodGroup}
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
            <p>State</p>
            <Accordion
              title="State"
              width="200px"
              height="45px"
              data={states}
              onSelect={handleStateSelect}
            />
          </div>
          <div className="bg-select-3">
            <p>Local Govt</p>
            <Accordion
              title="Select Local Govt"
              width="200px"
              height="45px"
              data={
                selectedState
                  ? states.find((s) => s.name === selectedState)
                      ?.localGovts || ["Select State First"]
                  : ["Select State First"]
              }
              onSelect={handleLGASubmit}
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
