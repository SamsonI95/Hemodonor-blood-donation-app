import React, { useState } from "react";
import { TesData } from "./TesData";
import { CarouselItem } from "./CarosuelItem";
import "./Carousel.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

export const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : TesData.length - 3
    );
  };

  const handleNextClick = () => {
    setActiveIndex((prevIndex) =>
      prevIndex < TesData.length - 3 ? prevIndex + 1 : 0
    );
  };


  return (
    <div className="carousel-container">
      <div
        className="carousel-inner"
        style={{ transform: "translateX(-${activeIndex * 33.33}%)"}}
      >
        {TesData.slice(activeIndex, activeIndex + 3).map((item, index) => (
          <CarouselItem key={index} item={item} />
        ))}
      </div>
      <div className="carousel-buttons">
        <button className="arrow left" onClick={handlePrevClick}>
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>
        <button className="arrow right" onClick={handleNextClick}>
          <FontAwesomeIcon icon={faChevronRight} />
        </button>
      </div>
      <div className="caousel-inidcators">
          <span className="material-symbols-outlined">radio_button_unchecked</span>
          <span className="material-symbols-outlined">radio_button_unchecked</span>
          <span className="material-symbols-outlined">radio_button_unchecked</span>
          <span className="material-symbols-outlined">radio_button_unchecked</span>
        </div>
    </div>
  );
};
