import React, { useState } from "react";
import "./HeroSection.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { Button } from "./Button";
import { TesData } from "./TesData";
import { PrcData } from "./PrcData";
import { InData } from "./InData";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

function HeroSection() {
  const [button, setButton] = useState(true);

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3,
    },
  };

  return (
    <>
      <div className="main-donate-card">
        <h3>CONNECTING LIVES SAVERS WITH LIVES IN NEED</h3>
        <p>
          We are on a mission to rediscover hope and save lives. just one blood
          donation can save lives or up to three people.
        </p>
        {button && (
          <Button buttonStyle="btn--primary" buttonSize="btn--small">
            Donate Now
          </Button>
        )}
        <div className="donor-search-container">
          <p>Find a Donor/Find a recipient</p>
          <div className="search-bar">
            <input type="text" placeholder="Enter address or Blood Type" />
            <div className="bottom-right-radius"></div>
            {button && (
              <Button buttonStyle="btn--primary" buttonSize="btn--search">
                Search
              </Button>
            )}
          </div>
        </div>
        <h4>Trusted by 5k+ users</h4>
      </div>
      <div className="sponsors-container">
        <img src="assets/image 11.svg" />
        <img src="assets/image 10.svg" />
        <img src="assets/image 8.svg" />
        <img src="assets/image 7.svg" />
        <img src="assets/image 6.svg" />
        <img src="assets/image 5.svg" />
      </div>
      <div className="donate-start-card1">
        <img src="assets/africa-humanitarian-aid-doctor-taking-care-patient.svg" />
        <h3>Join us, Donate Blood and Save Lives</h3>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy{" "}
        </p>
        {button && (
          <Button buttonStyle="btn--primary" buttonSize="btn--small">
            Get Started
          </Button>
        )}
      </div>
      <div className="product-card1-container">
        {PrcData.map((d) => (
          <div className="product-card1">
            <div className="card-image">
              <img src={d.image} alt="/" />
            </div>
            <div className="card-text">
              <h3>{d.title}</h3>
              <p>{d.description}</p>
            </div>
            <div className="card-button">
              {button && (
                <Button buttonStyle="btn--primary" buttonSize="btn--medium">
                  {d.buttonName} <FontAwesomeIcon icon={faArrowRight} />
                </Button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="discovery-container">
        <div className="dis-header">
          <h3>Discover how easy it is to become a hero</h3>
        </div>
        <div className="dis-content-card">
          <img src="assets/afr-doc.jpg" alt="" />
          <ul>
            <li>Register by Creating your donor profile</li>
            <li>Find a center by Locating a donation center near you</li>
            <li>Donate: by Giving the gift of life</li>
            <li>Track impact to See your contribution in real-time</li>
          </ul>
        </div>
        {button && (
          <Button buttonStyle="btn--primary" buttonSize="btn--small">
            Get Started
          </Button>
        )}
      </div>
      <div className="overview-container">
        <div className="overview-header">Process Overview</div>
        <div className="overview-content-card">
          <img src="assets/Rectangle 119.png" alt="" />
          <div className="overview-list">
            <ol>
              <li>
                <h3>Registration & Information Gathering</h3>
                <p>
                  Donors and recipients register, providing personal details and
                  blood type information. Also must meet specific eligibility
                  criteria, including age, weight, and general health
                </p>
              </li>
              <li>
                <h3>Blood Type & Compatibility matching</h3>
                <p>
                  The system matches donors and recipients based on blood type
                  and compatibility. Also the system considers factors such as
                  ABO and RhD blood group compatibility.
                </p>
              </li>
              <li>
                <h3>Donation Requesting & Communication</h3>
                <p>
                  Recipients create blood donation requests; donors are notified
                  and communicate their availability.
                </p>
              </li>
              <li>
                <h3>Notification and Search</h3>
                <p>
                  Donors receive notifications for nearby donation requests that
                  match their blood type and availability. Recipients will be
                  notified of nearby donors who match their requirements
                </p>
              </li>
              <li>
                <h3>Appointment Scheduling & Donation</h3>
                <p>
                  Donors and recipients schedule appointments for blood
                  donation, and the actual donation takes place at a specified
                  location.
                </p>
              </li>
              <li>
                <h3>Post-Donation Updates and Feedback</h3>
                <p>
                  Donors update their availability, and both parties provide
                  feedback to ensure a positive experience and encourage future
                  engagement.
                </p>
              </li>
            </ol>
          </div>
        </div>
      </div>
      <div className="incentive-card">
        <div className="incentive-card-header">
          <h3>The power of your donation</h3>
          <p>
            Every drop of blood can transform a life. By donating blood, you
            support accident victims, patients in surgeries, and your community.
          </p>
        </div>
        <div className="incentive-product-card-container">
          {InData.slice(0, 3).map((d) => (
            <div className="product-card2">
              <div className="incentive-card-text">
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </div>
              <div className="incentive-card-image">
                <img src={d.image} alt="/" />
              </div>
            </div>
          ))}
        </div>
        <div className="incentive-product-card-container2">
          {InData.slice(3, 5).map((d) => (
            <div className="product-card2">
              <div className="incentive-card-text">
                <h3>{d.title}</h3>
                <p>{d.description}</p>
              </div>
              <div className="incentive-card-image">
                <img src={d.image} alt="/" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="testimony-container">
        <div className="testimony-header">
          <h3>What our heroes say</h3>
          <p>
            Donors, recipients, and healthcare professionals share their
            stories:
          </p>
        </div>
        <div className="testimony-carousel-container">
          <div className="testimony-carousel-content">
            <Carousel
              showDots={true}
              responsive={responsive}
              containerClass="t-carousel-container"
              itemClass="tescard11"
              dotListClass="custom-dot-list-style"
            >
              {TesData.map((d) => (
                <>
                  <div
                    className={d.cName}
                    id={d.id}
                    style={{ border: "1px solid #000", borderRadius: "10px" }}
                  >
                    <h3>{d.text}</h3>
                    <p>{d.name}</p>
                    <i>
                      <img className={d.id} src={d.quote} />
                    </i>
                  </div>
                  <img className={d.circ} src={d.image} />
                </>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
      <div className="bottom-card-container">
        <div className="bottom-card-text">
          <h3>Join the sacred heart movement</h3>
          <p>
            Ready to make a difference? Join our growing community of heroes
            today!
          </p>
          <div className="bottom-card-button">
            {button && (
              <Button buttonStyle="btn--primary" buttonSize="btn--small">
                Get Started
              </Button>
            )}
          </div>
        </div>
        <div className="bottom-card-image">
          <img src="assets/26363.png" alt="/" />
        </div>
      </div>
    </>
  );
}

export default HeroSection;
