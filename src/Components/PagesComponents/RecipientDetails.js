//App
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

//Component
import { Button } from "../Reusables/Button";

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
  const [isDataFilled, setIsDataFilled] = useState(false);

  const buttonStyle = isDataFilled
    ? "btn--validate2 btn--enabled"
    : "btn--validate2 btn--disabled";

  const navigate = useNavigate();

  const handleRecipientSubmit = (e) => {
    e.preventDefault();

    navigate("/home");
  };

 const [state, setState] = useState()
 const [lga, setLga] = useState([])

 function handleState(event) {
    setState(event.target.value)
    setLga(states.find(state => state.name === event.target.value).localGovts)
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
            <select className="form-control" id="bg-select">
                <option>--Select Bloodgroup--</option>
                {BloodGroup.map((bg, index) => (
                  <option key={index} value={bg}>
                    {bg.name}
                  </option>
                ))}
            </select>
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
            <select className="form-control" id="state-select" onChange={handleState}>
                <option>--Select State--</option>
                {states.map((state, index) => (
                  <option key={index} value={state.name}>
                    {state.name}
                  </option>
                ))}
            </select>
          </div>
          <div className="bg-select-3">
            <p>Local Govt</p>
            <select className="form-control" id="lga-select">
                <option>--Select LocalGovt--</option>
                {lga.map((state, index) => (
                  <option key={index} value={state.lga}>
                    {state.lga}
                  </option>
                ))}
            </select>
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
