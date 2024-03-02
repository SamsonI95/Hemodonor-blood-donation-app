//App
import React, { useState } from "react";

//Styles
import "./BloodDonorsPanel.css";

//Components
import { Button } from "../Reusables/Button";

//icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faRotateRight } from "@fortawesome/free-solid-svg-icons";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";

const BloodDonorsPanel = () => {
  const [button] = useState(true);

  return (
    <>
      <div className="info-call-card">
        <div className="info-call-card-header">
          <ul>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
            <li>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </li>
          </ul>
          <div className="call">
            {button && (
              <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                <h3>
                  Auto-call{" "}
                  <span>
                    <FontAwesomeIcon icon={faPhone} />
                  </span>
                </h3>
              </Button>
            )}
            <h4>Use in case of emergency</h4>
          </div>
        </div>
        <div className="info-call-card-container">
          <div className="refresh">
            {button && (
              <Button buttonStyle="btn--refresh" buttonSize="btn--medium">
                <h3>
                  Refresh{" "}
                  <span>
                    <FontAwesomeIcon icon={faRotateRight} />
                  </span>
                </h3>
              </Button>
            )}
          </div>
          <section className="tag-1">
            <ul>
              <li>
                <h3>ABC</h3>
                <p>XXXXXXXXXX</p>
              </li>
              <li>
                <h3>DEF</h3>
                <p>XXXXXXXXXX</p>
              </li>
              <li>
                <h3>GHI</h3>
                <p>XXXXXXXXXX</p>
              </li>
              <li>
                <h3>LMN</h3>
                <p>XXXXXXXXXX</p>
              </li>
              <li>
                <h3>XYZ</h3>
                <p>XXXXXXXXXX</p>
              </li>
            </ul>
          </section>
          <div className="line-through"></div>
          <section className="tag-2">
            <div className="dropdown-card-arrow">
              <FontAwesomeIcon icon={faChevronUp} />
            </div>
            <div className="alert-text">
              <FontAwesomeIcon icon={faTriangleExclamation} className="warning-icon" />
              <h3>
                Call Main Coordinator If The Above Contacts Are Not Available
              </h3>
            </div>
            <div className="card-select">
              <h3>NAME</h3>
              <p>Place</p>
              <p>Contact Number : XXXXXXXXXX</p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default BloodDonorsPanel;
